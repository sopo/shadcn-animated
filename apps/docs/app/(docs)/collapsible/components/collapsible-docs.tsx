import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn-animated";
import DocsSection from "../../../../components/docs-section";
import DocsShell from "../../../../components/docs-shell";
import Bash from "../../../../components/bash";
import Code from "../../../../components/code-block";
import NextSection from "../../../../components/next-section";
import CollapsiblePreview from "./collapsible-preview";

const CollapsibleDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-3xl">Collapsible</h1>
        <DocsShell>
          <CollapsiblePreview />
        </DocsShell>
      </DocsSection>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl">Installation</h2>

        <div className="flex flex-col gap-3">
          <h2 className="font-medium">1. Install dependencies</h2>
          <Bash code="npm install motion" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-medium">2. Install collapsible</h2>
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
              <Bash code="npx shadcn-animated add collapsible" />
            </TabsContent>
            <TabsContent value="manual">
              <Code
                code={manualCode}
                expandable
                filename="components/ui/collapsible.tsx"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>
        <div className="flex flex-col gap-4">
          <Code
            code={`import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from @/components/ui/collapsible;
import { ChevronDownIcon } from "lucide-react";`}
          />
          <Code
            code={`  <div className="mx-auto w-xs h-50">
      <Collapsible className="max-w-md w-xs p-4 rounded-2xl  h-auto">
        <CollapsibleTrigger
          render={
            <Button variant="ghost" className="w-full text-lg">
              Product details
              <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
            </Button>
          }
        />

        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 text-sm">
          <div className="text-[16px] text-secondary-foreground">
            This panel can be expanded or collapsed to reveal additional
            content.
          </div>
          <Button size="lg">Learn More</Button>
        </CollapsibleContent>
      </Collapsible>
    </div>`}
          />
        </div>
      </div>

      <NextSection title="FAB menu" link="/fab-menu" />
    </div>
  );
};

export default CollapsibleDocs;

const manualCode = `
"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function Collapsible({ className, ...props }: CollapsiblePrimitive.Root.Props) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className={cn("bg-background", className)}
      {...props}
    />
  );
}

function CollapsibleTrigger({
  className,
  ...props
}: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn(
        "active:scale-none w-full bg-background hover:bg-background focus-visible:bg-background data-panel-open:bg-background",
        className,
      )}
      {...props}
    />
  );
}

function CollapsibleContent({
  className,
  children,
  ...props
}: CollapsiblePrimitive.Panel.Props) {
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-content"
      keepMounted
      className="overflow-hidden"
      {...props}
      render={(panelProps, state) => (
        <motion.div
          initial={false}
          animate={{
            height: state.open ? "auto" : 0,
            opacity: state.open ? 1 : 0,
            y: state.open ? 0 : 10,
          }}
          transition={{
            height: {
              ease: "easeOut",
              duration: 0.18,
            },
            opacity: {
              duration: 0.18,
              ease: "easeIn",
            },
            y: {
              ease: "easeOut",
              duration: 0.25,
            },
          }}
        >
          <div {...panelProps} className={cn(className)}>
            {children}
          </div>
        </motion.div>
      )}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

`;
