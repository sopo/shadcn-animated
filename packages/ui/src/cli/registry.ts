import { access, readFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

import { transform } from "sucrase";

export interface RegistryItem {
  dependencies: string[];
  registryDependencies: string[];
  source: string;
}

export const registry = {
  button: {
    dependencies: [
      "@base-ui/react",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
    ],
    registryDependencies: [],
    source: "button.tsx",
  },
  checkbox: {
    dependencies: [
      "@base-ui/react",
      "clsx",
      "lucide-react",
      "tailwind-merge",
      "motion/react",
    ],
    registryDependencies: [],
    source: "checkbox.tsx",
  },
  "radio-group": {
    dependencies: [
      "@base-ui/react",
      "clsx",
      "lucide-react",
      "tailwind-merge",
      "motion/react",
    ],
    registryDependencies: [],
    source: "radio-group.tsx",
  },
  select: {
    dependencies: ["@base-ui/react", "clsx", "lucide-react", "tailwind-merge"],
    registryDependencies: [],
    source: "select.tsx",
  },
  sheet: {
    dependencies: ["@base-ui/react", "clsx", "lucide-react", "tailwind-merge"],
    registryDependencies: ["button"],
    source: "sheet.tsx",
  },
  tabs: {
    dependencies: [
      "@base-ui/react",
      "class-variance-authority",
      "clsx",
      "motion",
      "tailwind-merge",
      "motion/react",
    ],
    registryDependencies: [],
    source: "tabs.tsx",
  },
} as const satisfies Record<string, RegistryItem>;

export type ComponentName = keyof typeof registry;

export const componentNames = Object.keys(registry) as ComponentName[];

export function resolveRegistryItems(names: string[]): ComponentName[] {
  const resolved: ComponentName[] = [];
  const visited = new Set<ComponentName>();

  const visit = (name: string) => {
    if (!(name in registry)) {
      throw new Error(
        `Unknown component "${name}". Available components: ${componentNames.join(", ")}.`,
      );
    }

    const componentName = name as ComponentName;
    if (visited.has(componentName)) return;

    visited.add(componentName);
    for (const dependency of registry[componentName].registryDependencies) {
      visit(dependency);
    }
    resolved.push(componentName);
  };

  for (const name of names) visit(name);
  return resolved;
}

export async function loadComponentSource(
  componentName: ComponentName,
  utilsAlias: string,
  useTypescript: boolean,
  sourceDirectory?: string,
): Promise<string> {
  const directory = sourceDirectory ?? (await findSourceDirectory());
  const sourcePath = fileURLToPath(
    new URL(registry[componentName].source, pathToDirectoryUrl(directory)),
  );
  let source = await readFile(sourcePath, "utf8");

  source = source.replace(
    /from\s+(["'])\.\.\/lib\/utils\1/g,
    `from "${utilsAlias}"`,
  );

  if (!useTypescript) {
    source = transform(source, {
      jsxRuntime: "preserve",
      transforms: ["typescript", "jsx"],
    }).code;
  }

  return source;
}

async function findSourceDirectory(): Promise<string> {
  const candidates = [
    fileURLToPath(new URL("../components/", import.meta.url)),
    fileURLToPath(new URL("../../src/components/", import.meta.url)),
  ];

  for (const candidate of candidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // Try the packaged source location next.
    }
  }

  throw new Error("The packaged component sources could not be found.");
}

function pathToDirectoryUrl(directory: string): URL {
  const normalized = directory.endsWith("/") ? directory : `${directory}/`;
  return pathToFileURL(normalized);
}
