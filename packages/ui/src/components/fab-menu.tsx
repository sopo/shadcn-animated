"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const FabMenuContext = React.createContext<{
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

function FabMenu({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <FabMenuContext.Provider value={{ open, setOpen }}>
      <div className={cn("relative", className)}>{children}</div>
    </FabMenuContext.Provider>
  );
}

function FabMenuTrigger({ children }: { children?: React.ReactNode }) {
  const { open, setOpen } = React.useContext(FabMenuContext);

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

function FabMenuContent({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}) {
  const { open } = React.useContext(FabMenuContext);

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

function FabMenuItem({
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

export { FabMenu, FabMenuTrigger, FabMenuContent, FabMenuItem };