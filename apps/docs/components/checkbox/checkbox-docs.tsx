import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn-animated";
import DocsSection from "../docs-section";
import DocsShell from "../docs-shell";

import Bash from "../bash";
import Code from "../code-block";
import NextSection from "../next-section";
import CheckboxPreview from "./checkbox-preview";

const CheckboxDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-3xl">Checkbox</h1>
        <DocsShell>
          <CheckboxPreview />
        </DocsShell>
      </DocsSection>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl">Installation</h2>

        <div className="flex flex-col gap-3">
          <h2 className="font-medium">1. Install dependencies</h2>
          <Bash code="npm install motion" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-medium">2. Install checkbox</h2>
          <Tabs defaultValue="command" className="w-full gap-4">
            <TabsList className="rounded-full" variant="line">
              <TabsTrigger value="command" className="rounded-full">
                Command
              </TabsTrigger>
              <TabsTrigger value="manual" className="rounded-full">
                Manual
              </TabsTrigger>
            </TabsList>
            <TabsContent value="command" className="flex flex-col gap-4">
              <Bash code="npx shadcn-animated add checkbox" />
            </TabsContent>
            <TabsContent value="manual">
              <Code
                code={manualCode}
                expandable
                filename="components/ui/checkbox.tsx"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>
        <div className="flex flex-col gap-4">
          <Code code={`import { Checkbox } from "@/components/ui/checkbox"`} />
          <Code code={`<Checkbox />`} />
        </div>
      </div>

      <NextSection title="Radio group" link="/radio-group" />
    </div>
  );
};

export default CheckboxDocs;

const manualCode = `
"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { CheckIcon } from "lucide-react";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      render={(checkboxProps, state) => (
        <div
          {...checkboxProps}
          className={cn(
            "peer relative flex size-4 shrink-0 items-center justify-center rounded border border-input outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-transparent data-checked:text-primary-foreground dark:data-checked:bg-primary cursor-pointer",
            className,
          )}
        >
          {state.checked && (
            <motion.div
              className="absolute inset-0 rounded-xs bg-primary"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1.1,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 40,
              }}
            />
          )}

          <CheckboxPrimitive.Indicator
            data-slot="checkbox-indicator"
            className="relative z-10 grid place-content-center text-background [&>svg]:size-3.5"
          >
            <CheckIcon />
          </CheckboxPrimitive.Indicator>
        </div>
      )}
      {...props}
    />
  );
}

export { Checkbox };

`;
