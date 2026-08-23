import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { addComponents } from "./add";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { force: true, recursive: true })),
  );
});

describe("addComponents", () => {
  it("resolves aliases and writes a component from a nested directory", async () => {
    const project = await createProject();
    const nestedDirectory = path.join(project, "src", "app");
    await writeFile(path.join(nestedDirectory, ".gitkeep"), "");

    const result = await addComponents(["button"], {
      cwd: nestedDirectory,
      install: false,
    });

    const target = path.join(project, "src", "components", "ui", "button.tsx");
    expect(result.files).toEqual([
      { action: "created", component: "button", path: target },
    ]);
    expect(await readFile(target, "utf8")).toContain('from "@/lib/utils"');
  });

  it("skips or overwrites an existing component based on confirmation", async () => {
    const project = await createProject();
    const target = path.join(project, "src", "components", "ui", "button.tsx");

    await addComponents(["button"], { cwd: project, install: false });
    await writeFile(target, "keep me", "utf8");

    const skipped = await addComponents(["button"], {
      confirmOverwrite: async () => false,
      cwd: project,
      install: false,
    });
    expect(skipped.files[0]?.action).toBe("skipped");
    expect(await readFile(target, "utf8")).toBe("keep me");

    const overwritten = await addComponents(["button"], {
      confirmOverwrite: async () => true,
      cwd: project,
      install: false,
    });
    expect(overwritten.files[0]?.action).toBe("overwritten");
    expect(await readFile(target, "utf8")).toContain("function Button");
  });

  it("adds registry dependencies before the requested component", async () => {
    const project = await createProject();
    const result = await addComponents(["sheet"], {
      cwd: project,
      install: false,
    });

    expect(result.files.map(({ component }) => component)).toEqual([
      "button",
      "sheet",
    ]);
    expect(
      await readFile(
        path.join(project, "src", "components", "ui", "sheet.tsx"),
        "utf8",
      ),
    ).toContain('from "./button"');
  });

  it("supports package.json imports and JavaScript projects", async () => {
    const project = await createProject({
      aliases: { ui: "#components", utils: "#utils" },
      packageImports: {
        "#components/*": "./src/components/*.tsx",
        "#utils": "./src/lib/utils.ts",
      },
      tsx: false,
    });

    await addComponents(["button"], { cwd: project, install: false });

    const content = await readFile(
      path.join(project, "src", "components", "button.jsx"),
      "utf8",
    );
    expect(content).toContain('from "#utils"');
    expect(content).not.toContain("type VariantProps");
    expect(content).not.toContain(": ButtonPrimitive.Props");
  });

  it("reports dry-run changes without writing files", async () => {
    const project = await createProject();
    const target = path.join(project, "src", "components", "ui", "tabs.tsx");

    const result = await addComponents(["tabs"], {
      cwd: project,
      dryRun: true,
      install: false,
    });

    expect(result.files[0]?.action).toBe("would-create");
    await expect(readFile(target, "utf8")).rejects.toThrow();
  });

  it("collects missing runtime dependencies for installation", async () => {
    const project = await createProject();
    let receivedDependencies: string[] = [];

    const result = await addComponents(["sheet"], {
      cwd: project,
      dependencyInstaller: async (_root, dependencies) => {
        receivedDependencies = dependencies;
        return { dependencies, packageManager: "pnpm" };
      },
    });

    expect(receivedDependencies).toEqual([
      "@base-ui/react",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "lucide-react",
    ]);
    expect(result.install.packageManager).toBe("pnpm");
  });

  it("rejects unknown components with the available names", async () => {
    const project = await createProject();

    await expect(
      addComponents(["missing"], { cwd: project, install: false }),
    ).rejects.toThrow(
      "Available components: button, checkbox, select, sheet, tabs",
    );
  });
});

interface ProjectOptions {
  aliases?: { ui: string; utils: string };
  packageImports?: Record<string, string>;
  tsx?: boolean;
}

async function createProject(options: ProjectOptions = {}): Promise<string> {
  const project = await mkdtemp(
    path.join(os.tmpdir(), "shadcn-animated-test-"),
  );
  temporaryDirectories.push(project);

  const aliases = options.aliases ?? {
    ui: "@/components/ui",
    utils: "@/lib/utils",
  };
  await writeFile(
    path.join(project, "components.json"),
    JSON.stringify({ aliases, tsx: options.tsx ?? true }),
  );
  await writeFile(
    path.join(project, "package.json"),
    JSON.stringify({
      imports: options.packageImports,
      name: "fixture",
      private: true,
    }),
  );
  await writeFile(
    path.join(project, "tsconfig.json"),
    JSON.stringify({
      compilerOptions: {
        baseUrl: ".",
        paths: { "@/*": ["./src/*"] },
      },
    }),
  );

  await mkdir(path.join(project, "src", "app"), { recursive: true });
  return project;
}
