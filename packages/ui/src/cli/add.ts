import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { loadComponentsConfig, resolveComponentTarget } from "./config";
import { installDependencies, type InstallResult } from "./installer";
import {
  loadComponentSource,
  registry,
  resolveRegistryItems,
  type ComponentName,
} from "./registry";

export interface AddOptions {
  cwd: string;
  dryRun?: boolean;
  install?: boolean;
  overwrite?: boolean;
  sourceDirectory?: string;
  confirmOverwrite?: (filePath: string) => Promise<boolean>;
  dependencyInstaller?: (
    projectRoot: string,
    dependencies: string[],
  ) => Promise<InstallResult>;
}

export interface FileResult {
  action:
    "created" | "overwritten" | "skipped" | "would-create" | "would-overwrite";
  component: ComponentName;
  path: string;
}

export interface AddResult {
  configPath: string;
  files: FileResult[];
  install: InstallResult;
}

interface PlannedFile {
  component: ComponentName;
  content: string;
  exists: boolean;
  path: string;
}

export async function addComponents(
  names: string[],
  options: AddOptions,
): Promise<AddResult> {
  const resolvedConfig = await loadComponentsConfig(options.cwd);
  const componentNames = resolveRegistryItems(names);
  const plannedFiles: PlannedFile[] = [];

  for (const component of componentNames) {
    const target = await resolveComponentTarget(resolvedConfig, component);
    plannedFiles.push({
      component,
      content: await loadComponentSource(
        component,
        resolvedConfig.config.aliases.utils,
        resolvedConfig.config.tsx,
        options.sourceDirectory,
      ),
      exists: await fileExists(target),
      path: target,
    });
  }

  if (options.dryRun) {
    return {
      configPath: resolvedConfig.path,
      files: plannedFiles.map((file) => ({
        action: file.exists ? "would-overwrite" : "would-create",
        component: file.component,
        path: file.path,
      })),
      install: { dependencies: [] },
    };
  }

  const accepted: PlannedFile[] = [];
  const skipped: FileResult[] = [];

  for (const file of plannedFiles) {
    if (!file.exists || options.overwrite) {
      accepted.push(file);
      continue;
    }

    const shouldOverwrite = options.confirmOverwrite
      ? await options.confirmOverwrite(file.path)
      : false;

    if (shouldOverwrite) {
      accepted.push(file);
    } else {
      skipped.push({
        action: "skipped",
        component: file.component,
        path: file.path,
      });
    }
  }

  const dependencies = [
    ...new Set(
      accepted.flatMap((file) => registry[file.component].dependencies),
    ),
  ];
  let install: InstallResult = { dependencies: [] };

  if (accepted.length > 0 && options.install !== false) {
    install = await (options.dependencyInstaller ?? installDependencies)(
      resolvedConfig.root,
      dependencies,
    );
  }

  const written: FileResult[] = [];
  for (const file of accepted) {
    await mkdir(path.dirname(file.path), { recursive: true });
    await writeFile(file.path, file.content, "utf8");
    written.push({
      action: file.exists ? "overwritten" : "created",
      component: file.component,
      path: file.path,
    });
  }

  return {
    configPath: resolvedConfig.path,
    files: [...written, ...skipped],
    install,
  };
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}
