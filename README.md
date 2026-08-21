# shadcn animated

A growing collection of handcrafted, animated [shadcn/ui](https://ui.shadcn.com/) components, distributed through a shadcn-style CLI.

## CLI

Initialize shadcn/ui in your application so it has a `components.json`, then add a component:

```bash
npx shadcn-animated add button
```

The CLI reads `aliases.ui` from `components.json`, resolves it through `tsconfig.json`, `jsconfig.json`, or `package.json#imports`, copies the component, and installs missing runtime dependencies. If a destination file already exists, the CLI asks before replacing it.

```bash
# Add several components.
npx shadcn-animated add button checkbox tabs

# Preview without writing files or installing packages.
npx shadcn-animated add sheet --dry-run

# Replace existing files without prompting.
npx shadcn-animated add button --overwrite

# Copy source files without installing dependencies.
npx shadcn-animated add button --no-install

# Run against another project directory.
npx shadcn-animated add button --cwd ./apps/web

# Show every available component.
npx shadcn-animated list
```

The available components are `button`, `checkbox`, `select`, `sheet`, and `tabs`. Adding `sheet` also adds its `button` dependency when needed. TypeScript and JavaScript shadcn projects are supported through the `tsx` setting in `components.json`.

## Workspace

This repository is a pnpm workspace with two projects:

- `packages/ui` — the publishable `shadcn-animated` package. It contains the CLI and reusable Button, Checkbox, Select, Sheet, and Tabs components, and builds ESM plus TypeScript declarations with tsup.
- `apps/docs` — the Next.js App Router documentation site. It consumes `shadcn-animated` through the `workspace:*` protocol and contains the landing, introduction, installation, Button, and Tabs pages.

## Development

Use Node.js 20.9 or newer and pnpm 10.

```bash
pnpm install
pnpm dev
```

The docs app is available at [http://localhost:3000](http://localhost:3000).

## Checks

```bash
pnpm build
pnpm typecheck
pnpm lint
```

## Adding a component

Run the shadcn CLI from the library project, then add animation behavior and export the component from `packages/ui/src/index.ts` and `packages/ui/tsup.config.ts`.

```bash
cd packages/ui
pnpm dlx shadcn@latest add button
```
