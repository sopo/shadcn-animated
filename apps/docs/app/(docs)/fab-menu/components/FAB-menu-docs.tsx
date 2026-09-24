import DocsSection from "@/components/docs-section";
import DocsShell from "@/components/docs-shell";

import Bash from "@/components/bash";
import {
  FABMenu,
  FABMenuContent,
  FABMenuItem,
  FABMenuTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "shadcn-animated";
import Code from "@/components/code-block";
import NextSection from "@/components/next-section";
import FABMenuPreview from "./FAB-menu-preview";

const FABMenuDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-3xl">FAB menu</h1>
        <DocsShell>
          <FABMenuPreview />
        </DocsShell>
      </DocsSection>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl">Installation</h2>

        <div className="flex flex-col gap-3">
          <h2 className="font-medium">1. Install dependencies</h2>
          <Bash code="npm install motion" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-medium">2. Install FAB menu</h2>
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
              <Bash code="npx shadcn-animated add FAB-menu" />
            </TabsContent>
            <TabsContent value="manual">
              <Code
                code={manualCode}
                expandable
                filename="components/ui/FAB-menu.tsx"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        <h2 className="text-xl">Usage</h2>
        <div className="flex flex-col gap-4">
          <Code
            code={`
              import { FABMenu, FABMenuContent, FABMenuItem, FABMenuTrigger } from "@/components/ui/FAB-menu";
              `}
          />
          <Code
            code={`
<FABMenu>
  <FABMenuTrigger />
    <FABMenuContent align="center">
        <FABMenuItem>📧 Send an email</FABMenuItem>
        <FABMenuItem>💬 Send a message</FABMenuItem>
        <FABMenuItem>☀️ Make a reminder</FABMenuItem>
    </FABMenuContent>
</FABMenu>
              `}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        <h2 className="text-xl">Add custom trigger</h2>

        <div className="flex flex-col gap-4">
          <DocsShell>
            <FABMenu>
              <FABMenuTrigger>Custom trigger</FABMenuTrigger>
              <FABMenuContent>
                <FABMenuItem>📧 Send an email</FABMenuItem>
                <FABMenuItem>💬 Send a message</FABMenuItem>
                <FABMenuItem>☀️ Make a reminder</FABMenuItem>
              </FABMenuContent>
            </FABMenu>
          </DocsShell>

          <Code
            code={`
<FABMenu>
  <FABMenuTrigger>Custom trigger</FABMenuTrigger>
    <FABMenuContent>
      <FABMenuItem>📧 Send an email</FABMenuItem>
      <FABMenuItem>💬 Send a message</FABMenuItem>
      <FABMenuItem>☀️ Make a reminder</FABMenuItem>
    </FABMenuContent>
</FABMenu>
              `}
          />
        </div>
      </div>

        <div className="flex flex-col gap-4 ">
        <h2 className="text-xl">Change alignment</h2>

        <div className="flex flex-col gap-4">
          <DocsShell>
            <div className="flex items-center gap-20">
            <div className="flex flex-col gap-4 items-center">
            <FABMenu>
              <FABMenuTrigger />
              <FABMenuContent align="left">
                <FABMenuItem>📧 Send an email</FABMenuItem>
                <FABMenuItem>💬 Send a message</FABMenuItem>
                <FABMenuItem>☀️ Make a reminder</FABMenuItem>
              </FABMenuContent>
            </FABMenu>
            <span className="text-[16px] font-medium text-secondary-foreground">Left</span>
            </div>
               <div className="flex flex-col gap-4 items-center">
            <FABMenu>
              <FABMenuTrigger />
              <FABMenuContent align="center">
                <FABMenuItem>📧 Send an email</FABMenuItem>
                <FABMenuItem>💬 Send a message</FABMenuItem>
                <FABMenuItem>☀️ Make a reminder</FABMenuItem>
              </FABMenuContent>
            </FABMenu>
            <span className="text-[16px] font-medium text-secondary-foreground">Center</span>
            </div>

                     <div className="flex flex-col gap-4 items-center">
            <FABMenu>
              <FABMenuTrigger />
              <FABMenuContent align="right">
                <FABMenuItem>📧 Send an email</FABMenuItem>
                <FABMenuItem>💬 Send a message</FABMenuItem>
                <FABMenuItem>☀️ Make a reminder</FABMenuItem>
</FABMenuContent>
            </FABMenu>
            <span className="text-[16px] font-medium text-secondary-foreground">Right</span>
            </div>
            </div>
          </DocsShell>

          <Code
            code={`
<FABMenu>
  <FABMenuTrigger>Custom trigger</FABMenuTrigger>
    <FABMenuContent align="left">
      <FABMenuItem>📧 Send an email</FABMenuItem>
      <FABMenuItem>💬 Send a message</FABMenuItem>
      <FABMenuItem>☀️ Make a reminder</FABMenuItem>
    </FABMenuContent>
</FABMenu>
              `}
          />

               <Code
            code={`
<FABMenu>
  <FABMenuTrigger>Custom trigger</FABMenuTrigger>
    <FABMenuContent align="center">
      <FABMenuItem>📧 Send an email</FABMenuItem>
      <FABMenuItem>💬 Send a message</FABMenuItem>
      <FABMenuItem>☀️ Make a reminder</FABMenuItem>
    </FABMenuContent>
</FABMenu>
              `}
          />

                       <Code
            code={`
<FABMenu>
  <FABMenuTrigger>Custom trigger</FABMenuTrigger>
    <FABMenuContent align="right">
      <FABMenuItem>📧 Send an email</FABMenuItem>
      <FABMenuItem>💬 Send a message</FABMenuItem>
      <FABMenuItem>☀️ Make a reminder</FABMenuItem>
    </FABMenuContent>
</FABMenu>
              `}
          />
        </div>
      </div>

      <NextSection title="Hover image" link="/hover-image" />
    </div>
  );
};

export default FABMenuDocs;

const manualCode = `
"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const FABMenuContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

const menuItemVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 20,
    scale: 0.9,
    transition: {
      delay: index * 0.05,
      duration: 0.18,
      ease: "easeOut",
    },
  }),
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.03,
      type: "spring",
      stiffness: 600,
      damping: 18,
      mass: 0.6,
    },
  }),
};

function FABMenu({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <FABMenuContext.Provider value={{ open, setOpen }}>
      <div className={cn("relative", className)}>{children}</div>
    </FABMenuContext.Provider>
  );
}

function FABMenuTrigger({ children }: { children?: React.ReactNode }) {
  const { open, setOpen } = React.useContext(FABMenuContext);

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      className="cursor-pointer"
    >
      {children ?? (
        <div className="inline-flex rounded-full bg-foreground p-2 shadow-lg">
          <Plus
            className={cn(
              "size-6 text-background transition-transform duration-200",
              open && "rotate-45",
            )}
          />
        </div>
      )}
    </button>
  );
}

function FABMenuContent({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}) {
  const { open } = React.useContext(FABMenuContext);

  const items = React.Children.toArray(children);

  return (
    <div
      className={cn(
        "absolute bottom-14",
        align === "right" && "right-0",
        align === "left" && "left-0",
        align === "center" && "left-1/2 -translate-x-1/2",
        !open && "pointer-events-none",
        className,
      )}
    >
      <motion.div
        className={cn(
          "flex flex-col gap-2",
          align === "right" && "items-end",
          align === "left" && "items-start",
          align === "center" && "items-center",
        )}
        initial={false}
        animate={open ? "visible" : "hidden"}
      >
        {items.map((child, index) => (
          <motion.div
            key={index}
            custom={items.length - 1 - index}
            variants={menuItemVariants}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function FABMenuItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="secondary"
      className={cn(
        "h-12 rounded-full bg-foreground/70 px-4 text-lg text-background backdrop-blur-lg hover:bg-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export { FABMenu, FABMenuTrigger, FABMenuContent, FABMenuItem };

`;
