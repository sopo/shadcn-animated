// "use client";

// import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
// import { motion } from "motion/react";
// import { cn } from "../lib/utils";
// import { CheckIcon } from "lucide-react";

// function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
//   return (
//     <CheckboxPrimitive.Root
//       data-slot="checkbox"
//       render={(checkboxProps, state) => (
//         <div
//           {...checkboxProps}
//           className={cn(
//             "peer relative flex size-4 shrink-0 items-center justify-center rounded border border-input outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-transparent data-checked:text-primary-foreground dark:data-checked:bg-primary cursor-pointer",
//             className,
//           )}
//         >
//           {state.checked && (
//             <motion.div
//               className="absolute inset-0 rounded-xs bg-primary"
//               initial={{
//                 scale: 0,
//                 opacity: 0,
//               }}
//               animate={{
//                 scale: 1.1,
//                 opacity: 1,
//               }}
//               exit={{
//                 scale: 0,
//                 opacity: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 900,
//                 damping: 40,
//               }}
//             />
//           )}

//           <CheckboxPrimitive.Indicator
//             data-slot="checkbox-indicator"
//             className="relative z-10 grid place-content-center text-background [&>svg]:size-3.5"
//           >
//             <CheckIcon />
//           </CheckboxPrimitive.Indicator>
//         </div>
//       )}
//       {...props}
//     />
//   );
// }

// export { Checkbox };


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
            className
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