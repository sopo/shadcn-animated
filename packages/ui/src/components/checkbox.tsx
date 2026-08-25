"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "../lib/utils";
import { CheckIcon } from "lucide-react";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <>
      <style>{`
        @keyframes checkbox-bg {
          0% {
            background-color: transparent;
            border-color: transparent;
          }
          50% {
            background-color: color-mix(
              in oklch,
              var(--color-primary) 5%,
              transparent
            );
            border-color: color-mix(
              in oklch,
              var(--color-primary) 0%,
              transparent
            );
          }
          100% {
            background-color: var(--color-primary);
            border-color: var(--color-primary);
          }
        }
      `}</style>
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(
          " data-checked:animate-[checkbox-bg_90ms_ease-in-out_forwards] peer relative flex size-4 shrink-0 items-center justify-center rounded border border-input outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary  data-checked:text-primary-foreground dark:data-checked:bg-primary cursor-pointer",
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="grid place-content-center text-background [&>svg]:size-3.5 "
        >
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  );
}

export { Checkbox };
