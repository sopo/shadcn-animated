"use client";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "@/lib/utils";

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default";
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch cursor-pointer relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <style>{`
    @keyframes thumb-stretch {
      0%, 100% {
        transform: scaleX(1);
      }

      25% {
        transform: scaleX(1.2);
      }
    }
          @keyframes thumb-stretch-off {
      0%, 100% {
        transform: scaleX(1);
      }

      25% {
        transform: scaleX(1.2);
      }
    }

    [data-slot="switch-thumb"][data-checked] {
      animation: thumb-stretch 180ms ease-in-out;
    }
       [data-slot="switch-thumb"]:not([data-checked]) {
    animation: thumb-stretch-off 180ms ease-in-out;
  }
  `}</style>

      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none relative block rounded-full bg-background ring-0
    transition-transform
    duration-180
    ease-[cubic-bezier(0.34,1.56,0.64,1)]
    group-data-[size=default]/switch:size-4
    group-data-[size=sm]/switch:size-3
    group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)]
    group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)]
    dark:data-checked:bg-primary-foreground
    dark:data-unchecked:bg-foreground"
      ></SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
