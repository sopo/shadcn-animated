import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn-animated";
import DocsSection from "../docs-section";
import DocsShell from "../docs-shell";

import Bash from "../bash";
import Code from "../code-block";
import NextSection from "../next-section";
import RadioGroupPreview from "./radio-group-preview";

const RadioGroupDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-3xl">Radio group</h1>
        <DocsShell>
          <RadioGroupPreview />
        </DocsShell>
      </DocsSection>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl">Installation</h2>

        <div className="flex flex-col gap-3">
          <h2 className="font-medium">1. Install dependencies</h2>
          <Bash code="npm install motion" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-medium">2. Install radio group</h2>

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
              <Bash code="npx shadcn-animated add radio-group" />
            </TabsContent>
            <TabsContent value="manual">
              <Code
                code={manualCode}
                expandable
                filename="components/ui/radio-group.tsx"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>
        <div className="flex flex-col gap-4">
          <Code
            code={`import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"`}
          />
          <Code
            code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
          />
        </div>
      </div>

      <NextSection title="Tabs" link="/tabs" />
    </div>
  );
};

export default RadioGroupDocs;

const manualCode = `
"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid w-full gap-2", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      render={(radioProps, state) => (
        <div
          {...radioProps}
          className={cn(
            "group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input data-checked:border-transparent outline-none group-has-focus-visible/field-label:ring-0 group-has-focus-visible/field-label:not-data-checked:border-input after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40  data-checked:text-primary-foreground group-has-focus-visible/field-label:data-checked:border-primary ",
            className,
          )}
        >
          {state.checked && (
            <motion.div
              className="absolute inset-0"
              transition={{
                duration: 0.2,
              }}
            >
              <motion.div
                className="size-full rounded-full bg-primary"
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
                  duration: 0.2,
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            </motion.div>
          )}

          <RadioPrimitive.Indicator
            data-slot="radio-group-indicator"
            className="flex size-4 items-center justify-center"
          >
            <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" />
          </RadioPrimitive.Indicator>
        </div>
      )}
      {...props}
    />
  );
}

export { RadioGroup, RadioGroupItem };

`;
