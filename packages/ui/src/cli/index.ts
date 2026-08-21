import { readFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

import {
  cancel,
  confirm,
  intro,
  isCancel,
  log,
  outro,
} from "@clack/prompts"
import { Command } from "commander"

import { addComponents } from "./add"
import { componentNames } from "./registry"

class PromptCancelledError extends Error {}

async function main() {
  const program = new Command()
  const version = await getVersion()

  program
    .name("shadcn-animated")
    .description("Add animated shadcn/ui components to your project")
    .version(version)

  program
    .command("add")
    .description("add one or more animated components")
    .argument("<components...>", "component names")
    .option("-c, --cwd <path>", "working directory", process.cwd())
    .option("-o, --overwrite", "overwrite existing files", false)
    .option("--no-install", "do not install component dependencies")
    .option("--dry-run", "show changes without writing files", false)
    .action(
      async (
        components: string[],
        options: {
          cwd: string
          dryRun: boolean
          install: boolean
          overwrite: boolean
        },
      ) => {
        intro("shadcn-animated")

        const result = await addComponents(components, {
          cwd: path.resolve(options.cwd),
          dryRun: options.dryRun,
          install: options.install,
          overwrite: options.overwrite,
          confirmOverwrite: async (filePath) => {
            if (!process.stdin.isTTY) {
              log.warn(
                `${path.relative(process.cwd(), filePath)} already exists; skipped because input is not interactive. Use --overwrite to replace it.`,
              )
              return false
            }

            const answer = await confirm({
              message: `${path.relative(process.cwd(), filePath)} already exists. Overwrite it?`,
              initialValue: false,
            })

            if (isCancel(answer)) {
              throw new PromptCancelledError("Operation cancelled.")
            }

            return answer
          },
        })

        log.info(`Using ${result.configPath}`)
        for (const file of result.files) {
          const relativePath = path.relative(process.cwd(), file.path)
          if (file.action === "skipped") {
            log.warn(`Skipped ${relativePath}`)
          } else {
            log.success(`${formatAction(file.action)} ${relativePath}`)
          }
        }

        if (result.install.dependencies.length > 0) {
          log.success(
            `Installed ${result.install.dependencies.join(", ")} with ${result.install.packageManager}`,
          )
        }

        outro(options.dryRun ? "No files were changed." : "Done.")
      },
    )

  program
    .command("list")
    .description("list available animated components")
    .action(() => {
      for (const name of componentNames) console.log(name)
    })

  try {
    await program.parseAsync(process.argv)
  } catch (error) {
    if (error instanceof PromptCancelledError) {
      cancel(error.message)
      process.exitCode = 1
      return
    }

    log.error(error instanceof Error ? error.message : "An unknown error occurred.")
    process.exitCode = 1
  }
}

function formatAction(action: string): string {
  switch (action) {
    case "created":
      return "Created"
    case "overwritten":
      return "Overwrote"
    case "would-create":
      return "Would create"
    case "would-overwrite":
      return "Would overwrite"
    default:
      return action
  }
}

async function getVersion(): Promise<string> {
  const packagePath = fileURLToPath(new URL("../../package.json", import.meta.url))
  const packageJson = JSON.parse(await readFile(packagePath, "utf8")) as {
    version: string
  }
  return packageJson.version
}

void main()
