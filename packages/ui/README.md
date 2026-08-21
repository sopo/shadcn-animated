# shadcn-animated

Add animated shadcn/ui components directly to your project:

```bash
npx shadcn-animated add button
```

The CLI requires an existing shadcn/ui `components.json`. It uses `aliases.ui` to choose the destination, rewrites the utils import to `aliases.utils`, installs missing runtime dependencies, and asks before overwriting an existing file.

## Commands

```bash
npx shadcn-animated list
npx shadcn-animated add button checkbox tabs
npx shadcn-animated add sheet --dry-run
npx shadcn-animated add button --overwrite
npx shadcn-animated add button --no-install
npx shadcn-animated add button --cwd ./apps/web
```

Available components: `button`, `checkbox`, `select`, `sheet`, and `tabs`.
