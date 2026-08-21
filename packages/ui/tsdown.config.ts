import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    button: "src/components/button.tsx",
    checkbox: "src/components/checkbox.tsx",
    select: "src/components/select.tsx",
    sheet: "src/components/sheet.tsx",
    tabs: "src/components/tabs.tsx",
    "cli/index": "src/cli/index.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  fixedExtension: false,
  sourcemap: true,
});
