"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const DECEL = [0.0, 0.0, 0.2, 1.0] as const;
const ACCEL = [0.4, 0.0, 1.0, 1.0] as const;

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      render={(checkboxProps, state) => (
        <div
          {...checkboxProps}
          className={cn(
            "peer relative flex size-5 shrink-0 items-center justify-center rounded-xs border border-input outline-none transition-colors duration-180 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-checked:border-primary data-checked:bg-primary cursor-pointer overflow-hidden",
            className,
          )}
        >
          <AnimatePresence initial={false}>
            {state.checked && (
              <motion.svg
                key="checkmark"
                className="size-3.5 text-primary-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M1.73 12.91L8.1 19.28L22.79 4.59"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  exit={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  transition={{
                    pathLength: {
                      duration: state.checked ? 0.22 : 0.14,
                      ease: state.checked ? DECEL : ACCEL,
                    },
                    opacity: {
                      duration: 0.3,
                    },
                  }}
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </div>
      )}
      {...props}
    />
  );
}

export { Checkbox };
