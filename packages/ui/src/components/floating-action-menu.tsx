"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const FloatingActionMenuContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.9,
  },
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

function FloatingActionMenu({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <FloatingActionMenuContext.Provider value={{ open, setOpen }}>
      <div className={cn("relative", className)}>
        {children}
      </div>
    </FloatingActionMenuContext.Provider>
  );
}

function FloatingActionMenuTrigger({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { open, setOpen } = React.useContext(FloatingActionMenuContext);

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
    >
      {children ?? (
        <div className="inline-flex rounded-full bg-black p-2 shadow-lg">
          <Plus
            className={cn(
              "size-6 text-white transition-transform duration-200",
              open && "rotate-45",
            )}
          />
        </div>
      )}
    </button>
  );
}

function FloatingActionMenuContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open } = React.useContext(FloatingActionMenuContext);

  const items = React.Children.toArray(children);

  return (
    <div
      className={cn(
        "absolute bottom-14 left-1/2 -translate-x-1/2",
        !open && "pointer-events-none",
        className,
      )}
    >
      <motion.div
        className="flex flex-col items-end gap-2"
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

function FloatingActionMenuItem({
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

export {
  FloatingActionMenu,
  FloatingActionMenuTrigger,
  FloatingActionMenuContent,
  FloatingActionMenuItem,
};
