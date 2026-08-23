import { access, readFile, stat } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";

import { parse, printParseErrorCode, type ParseError } from "jsonc-parser";
import { z } from "zod";

const componentsConfigSchema = z
  .object({
    tsx: z.boolean().optional().default(true),
    aliases: z
      .object({
        ui: z.string().min(1),
        utils: z.string().min(1),
      })
      .passthrough(),
  })
  .passthrough();

export type ComponentsConfig = z.infer<typeof componentsConfigSchema>;

export interface ResolvedComponentsConfig {
  config: ComponentsConfig;
  path: string;
  root: string;
}

interface PathMapping {
  baseDirectory: string;
  paths: Record<string, string[]>;
}

export async function loadComponentsConfig(
  startDirectory: string,
): Promise<ResolvedComponentsConfig> {
  const start = path.resolve(startDirectory);

  let startStats;
  try {
    startStats = await stat(start);
  } catch {
    throw new Error(`The working directory does not exist: ${start}`);
  }

  let current = startStats.isDirectory() ? start : path.dirname(start);

  while (true) {
    const configPath = path.join(current, "components.json");

    try {
      await access(configPath);
      const rawConfig = await readJsonc(configPath);
      const parsed = componentsConfigSchema.safeParse(rawConfig);

      if (!parsed.success) {
        const details = parsed.error.issues
          .map(
            (issue) => `${issue.path.join(".") || "config"}: ${issue.message}`,
          )
          .join("; ");
        throw new Error(`Invalid components.json: ${details}`);
      }

      return {
        config: parsed.data,
        path: configPath,
        root: current,
      };
    } catch (error) {
      if (isMissingFileError(error)) {
        const parent = path.dirname(current);
        if (parent === current) {
          break;
        }
        current = parent;
        continue;
      }
      throw error;
    }
  }

  throw new Error(
    `Could not find components.json from ${start}. Run the shadcn init command first.`,
  );
}

export async function resolveComponentTarget(
  resolvedConfig: ResolvedComponentsConfig,
  componentName: string,
): Promise<string> {
  const { config, root } = resolvedConfig;
  const extension = config.tsx ? ".tsx" : ".jsx";
  const uiAlias = config.aliases.ui.replace(/\/$/, "");
  const importSpecifier = `${uiAlias}/${componentName}`;

  const packageImportTarget = await resolvePackageImport(root, importSpecifier);
  if (packageImportTarget) {
    return withSourceExtension(packageImportTarget, extension);
  }

  const compilerTarget = await resolveCompilerPath(root, importSpecifier);
  if (compilerTarget) {
    return withSourceExtension(compilerTarget, extension);
  }

  if (
    uiAlias.startsWith("./") ||
    uiAlias.startsWith("../") ||
    (!uiAlias.startsWith("@") &&
      !uiAlias.startsWith("#") &&
      !uiAlias.startsWith("~"))
  ) {
    return path.resolve(root, `${uiAlias}/${componentName}${extension}`);
  }

  throw new Error(
    `Could not resolve the ui alias "${uiAlias}". Add a matching path alias to tsconfig.json or jsconfig.json.`,
  );
}

async function resolveCompilerPath(
  projectRoot: string,
  importSpecifier: string,
): Promise<string | undefined> {
  const configPath = await findFirstExisting([
    path.join(projectRoot, "tsconfig.json"),
    path.join(projectRoot, "jsconfig.json"),
  ]);

  if (!configPath) {
    return undefined;
  }

  const mappings = await loadPathMappings(configPath, new Set());
  for (const mapping of mappings) {
    for (const [pattern, targets] of Object.entries(mapping.paths)) {
      const wildcard = matchPattern(pattern, importSpecifier);
      if (wildcard === undefined) {
        continue;
      }

      for (const target of targets) {
        const replaced = target.replace("*", wildcard);
        return path.resolve(mapping.baseDirectory, replaced);
      }
    }
  }

  return undefined;
}

async function loadPathMappings(
  configPath: string,
  seen: Set<string>,
): Promise<PathMapping[]> {
  const absolutePath = path.resolve(configPath);
  if (seen.has(absolutePath)) {
    return [];
  }
  seen.add(absolutePath);

  const raw = (await readJsonc(absolutePath)) as {
    extends?: string | string[];
    compilerOptions?: {
      baseUrl?: string;
      paths?: Record<string, string[]>;
    };
  };
  const configDirectory = path.dirname(absolutePath);
  const mappings: PathMapping[] = [];

  if (raw.compilerOptions?.paths) {
    mappings.push({
      baseDirectory: path.resolve(
        configDirectory,
        raw.compilerOptions.baseUrl ?? ".",
      ),
      paths: raw.compilerOptions.paths,
    });
  }

  const extendedConfigs = Array.isArray(raw.extends)
    ? raw.extends
    : raw.extends
      ? [raw.extends]
      : [];

  for (const extendedConfig of extendedConfigs) {
    const extendedPath = await resolveExtendedConfig(
      extendedConfig,
      absolutePath,
    );
    if (extendedPath) {
      mappings.push(...(await loadPathMappings(extendedPath, seen)));
    }
  }

  return mappings;
}

async function resolvePackageImport(
  projectRoot: string,
  importSpecifier: string,
): Promise<string | undefined> {
  const packagePath = await findFirstExisting([
    path.join(projectRoot, "package.json"),
  ]);
  if (!packagePath) {
    return undefined;
  }

  const packageJson = JSON.parse(await readFile(packagePath, "utf8")) as {
    imports?: Record<string, unknown>;
  };

  for (const [pattern, value] of Object.entries(packageJson.imports ?? {})) {
    const wildcard = matchPattern(pattern, importSpecifier);
    if (wildcard === undefined) {
      continue;
    }

    const target = getImportTarget(value);
    if (target?.startsWith(".")) {
      return path.resolve(projectRoot, target.replace("*", wildcard));
    }
  }

  return undefined;
}

function getImportTarget(value: unknown): string | undefined {
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      const target = getImportTarget(item);
      if (target) return target;
    }
  }
  if (value && typeof value === "object") {
    const conditions = value as Record<string, unknown>;
    for (const key of ["import", "default", "node"]) {
      const target = getImportTarget(conditions[key]);
      if (target) return target;
    }
  }
  return undefined;
}

function matchPattern(pattern: string, value: string): string | undefined {
  const wildcardIndex = pattern.indexOf("*");
  if (wildcardIndex === -1) {
    return pattern === value ? "" : undefined;
  }

  const prefix = pattern.slice(0, wildcardIndex);
  const suffix = pattern.slice(wildcardIndex + 1);
  if (!value.startsWith(prefix) || !value.endsWith(suffix)) {
    return undefined;
  }

  return value.slice(prefix.length, value.length - suffix.length);
}

function withSourceExtension(target: string, extension: string): string {
  if (/\.(?:jsx?|tsx?)$/.test(target)) {
    return target.replace(/\.(?:jsx?|tsx?)$/, extension);
  }
  return `${target}${extension}`;
}

async function resolveExtendedConfig(
  extendedConfig: string,
  fromConfigPath: string,
): Promise<string | undefined> {
  const fromDirectory = path.dirname(fromConfigPath);
  if (extendedConfig.startsWith(".")) {
    const candidate = path.resolve(fromDirectory, extendedConfig);
    return findFirstExisting([
      candidate,
      `${candidate}.json`,
      path.join(candidate, "tsconfig.json"),
    ]);
  }

  try {
    return createRequire(fromConfigPath).resolve(extendedConfig);
  } catch {
    return undefined;
  }
}

async function readJsonc(filePath: string): Promise<unknown> {
  const errors: ParseError[] = [];
  const result = parse(await readFile(filePath, "utf8"), errors, {
    allowTrailingComma: true,
  });

  if (errors.length > 0) {
    throw new Error(
      `Could not parse ${filePath}: ${errors
        .map((error) => printParseErrorCode(error.error))
        .join(", ")}`,
    );
  }

  return result;
}

async function findFirstExisting(
  candidates: string[],
): Promise<string | undefined> {
  for (const candidate of candidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // Try the next candidate.
    }
  }
  return undefined;
}

function isMissingFileError(error: unknown): boolean {
  return (
    error instanceof Error &&
    "code" in error &&
    (error as NodeJS.ErrnoException).code === "ENOENT"
  );
}
