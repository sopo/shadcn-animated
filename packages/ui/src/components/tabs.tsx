"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { LayoutGroup, motion } from "motion/react";
import { cn } from "../lib/utils";
import { useId } from "react";
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg px-0.5 text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none ",
  {
    variants: {
      variant: {
        default: "bg-muted ",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  const id = useId();
  return (
    <LayoutGroup id={id}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        data-variant={variant}
        className={cn("flex gap-2", tabsListVariants({ variant }), className)}
        {...props}
      />
    </LayoutGroup>
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      render={(tabProps, state) => {
        return (
          <button
            {...tabProps}
            className={cn(
              "relative inline-flex h-[calc(100%-1px)] cursor-pointer flex-1 data-active:text-foreground items-center justify-center gap-1.5 rounded-lg border border-transparent px-4 py-2  group-data-[variant=line]/tabs-list:px-2 text-sm font-medium whitespace-nowrap text-foreground/60  group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-none group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",

              className,
            )}
          >
            {state.active && (
              <motion.div
                layoutId={"active-tab"}
                className="absolute inset-0 rounded-[inherit] shadow-sm group-data-[variant=line]/tabs-list:bg-foreground group-data-[variant=line]/tabs-list:h-0.5 group-data-[variant=line]/tabs-list:left-0 group-data-[variant=line]/tabs-list:right-0 group-data-[variant=line]/tabs-list:-bottom-2 group-data-[variant=line]/tabs-list:top-auto"
                transition={{
                  duration: 0.18,
                }}
              />
            )}

            <div className="relative z-10 cursor-pointer ">
              {props.children}
            </div>
          </button>
        );
      }}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
