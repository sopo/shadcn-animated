import { access, readFile } from "node:fs/promises"
import { spawn } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

export interface InstallResult {
  dependencies: string[]
  packageManager?: PackageManager
}

type PackageManager = "bun" | "npm" | "pnpm" | "yarn"

export async function installDependencies(
  projectRoot: string,
  dependencies: string[],
): Promise<InstallResult> {
  const packagePath = path.join(projectRoot, "package.json")
  let projectPackage: PackageJson

  try {
    projectPackage = JSON.parse(await readFile(packagePath, "utf8")) as PackageJson
  } catch (error) {
    if (isMissingFileError(error)) {
      throw new Error(
        `Cannot install component dependencies because ${packagePath} does not exist. Use --no-install to only copy files.`,
        { cause: error },
      )
    }
    throw new Error(`Could not read ${packagePath}.`, { cause: error })
  }

  const declared = new Set([
    ...Object.keys(projectPackage.dependencies ?? {}),
    ...Object.keys(projectPackage.devDependencies ?? {}),
    ...Object.keys(projectPackage.peerDependencies ?? {}),
  ])
  const missing = [...new Set(dependencies)].filter((name) => !declared.has(name))

  if (missing.length === 0) {
    return { dependencies: [] }
  }

  const versions = await readOwnDependencyVersions()
  const specs = missing.map((name) =>
    versions[name] ? `${name}@${versions[name]}` : name,
  )
  const packageManager = await detectPackageManager(projectRoot)
  const args = packageManagerArgs(packageManager, specs)

  await run(packageManager, args, projectRoot)
  return { dependencies: missing, packageManager }
}

async function readOwnDependencyVersions(): Promise<Record<string, string>> {
  const packagePath = fileURLToPath(new URL("../../package.json", import.meta.url))
  const packageJson = JSON.parse(await readFile(packagePath, "utf8")) as PackageJson
  return packageJson.dependencies ?? {}
}

async function detectPackageManager(startDirectory: string): Promise<PackageManager> {
  let current = path.resolve(startDirectory)

  while (true) {
    const lockfiles: Array<[string, PackageManager]> = [
      ["pnpm-lock.yaml", "pnpm"],
      ["yarn.lock", "yarn"],
      ["bun.lock", "bun"],
      ["bun.lockb", "bun"],
      ["package-lock.json", "npm"],
    ]

    for (const [lockfile, packageManager] of lockfiles) {
      try {
        await access(path.join(current, lockfile))
        return packageManager
      } catch {
        // Continue searching toward the workspace root.
      }
    }

    try {
      const packageJson = JSON.parse(
        await readFile(path.join(current, "package.json"), "utf8"),
      ) as PackageJson
      const declaredManager = packageJson.packageManager?.split("@")[0]
      if (
        declaredManager === "bun" ||
        declaredManager === "npm" ||
        declaredManager === "pnpm" ||
        declaredManager === "yarn"
      ) {
        return declaredManager
      }
    } catch {
      // This directory does not declare a package manager.
    }

    const parent = path.dirname(current)
    if (parent === current) break
    current = parent
  }

  return "npm"
}

function packageManagerArgs(
  packageManager: PackageManager,
  dependencies: string[],
): string[] {
  switch (packageManager) {
    case "npm":
      return ["install", ...dependencies]
    case "pnpm":
    case "yarn":
    case "bun":
      return ["add", ...dependencies]
  }
}

function run(command: string, args: string[], cwd: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: "inherit" })

    child.on("error", (error) => reject(error))
    child.on("exit", (code, signal) => {
      if (code === 0) {
        resolve()
        return
      }
      reject(
        new Error(
          signal
            ? `${command} was terminated by ${signal}.`
            : `${command} exited with code ${code ?? "unknown"}.`,
        ),
      )
    })
  })
}

interface PackageJson {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  packageManager?: string
  peerDependencies?: Record<string, string>
}

function isMissingFileError(error: unknown): boolean {
  return (
    error instanceof Error &&
    "code" in error &&
    (error as NodeJS.ErrnoException).code === "ENOENT"
  )
}
