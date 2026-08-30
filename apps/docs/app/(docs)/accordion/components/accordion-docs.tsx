import DocsSection from "@/components/docs-section";
import DocsShell from "@/components/docs-shell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn-animated";
import AccordionPreview from "./accordion-preview";
import Bash from "@/components/bash";
import Code from "@/components/code-block";
import NextSection from "@/components/next-section";

const AccordionDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
         
     
           
        <h1 className="text-3xl">Accordion</h1>

        <DocsShell>
             <div className=" overflow-y-auto min-h-50">
           <div className="flex self-start">

          <AccordionPreview />
    </div>
           </div>
        </DocsShell>
       
      </DocsSection>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Installation</h2>
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
            <Bash code="npx shadcn-animated add accordion" />
          </TabsContent>
          <TabsContent value="manual">
            <Code
              code={manualCode}
              expandable
              filename="components/ui/accordion.tsx"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>
        <div className="flex flex-col gap-4">
          <Code
            code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"`}
          />
          <Code
            code={`<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          />
        </div>
      </div>

      <NextSection title="Button" link="/button" />
    </div>
  );
};

export default AccordionDocs;

const manualCode = `
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger cursor-pointer relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        />
        <ChevronUpIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      keepMounted
      className="overflow-hidden text-sm"
      {...props}
      render={(panelProps, state) => (
        <AnimatePresence initial={false}>
          {state.open && (
            <motion.div
              key="accordion-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: state.open ? "auto" : 0,
                opacity: state.open ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: {
                  type: "spring",
                  stiffness: 700,
                  damping: 70,
                },
                opacity: { duration: 0.14 },
              }}
            >
              <div
                {...panelProps}
                className={cn(
                  "pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
                  className,
                )}
              >
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    />
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

`;
