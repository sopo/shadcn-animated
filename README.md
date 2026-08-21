# shadcn animated

A growing collection of handcrafted, animated [shadcn/ui](https://ui.shadcn.com/) components.

## Workspace

This repository is a pnpm workspace with two projects:

- `packages/ui` — the `shadcn-animated` component library. It contains the reusable Button, Checkbox, Select, Sheet, and Tabs components and builds ESM plus TypeScript declarations with tsup.
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
