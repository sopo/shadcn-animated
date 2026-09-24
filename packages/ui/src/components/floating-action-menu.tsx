"use client";

import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { Button } from "./button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { Grid2X2, Plus } from "lucide-react";

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


function FloatingActionMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger>
        <div className="inline-flex rounded-full bg-black shadow-lg">
          <Plus
            className={`size-6 text-white transition-transform duration-200 ${
              open ? "rotate-45" : ""
            }`}
          />
        </div>
      </CollapsibleTrigger>

      <div className="relative flex items-center justify-center">
        <CollapsibleContent className="absolute bottom-14 left-1/2 -translate-x-1/2">
   
          <motion.div
            className="flex flex-col items-end gap-2"
            initial="hidden"
            animate={open ? "visible" : "hidden"}
          >
            <motion.div
              variants={menuItemVariants}
              custom={2}
            >
              <Button
                variant="secondary"
                className="h-12 rounded-full bg-foreground/70 px-4 text-lg text-background backdrop-blur-lg hover:bg-foreground"
              >
                <Grid2X2 />
                Send an email
              </Button>
            </motion.div>

            <motion.div
              variants={menuItemVariants}
              custom={1}
            >
              <Button
                variant="secondary"
                className="h-12 rounded-full bg-foreground/70 px-4 text-lg text-background backdrop-blur-lg hover:bg-foreground"
              >
                <Grid2X2 />
                Make reminder
              </Button>
            </motion.div>

            <motion.div
              variants={menuItemVariants}
              custom={0}
            >
              <Button
                variant="secondary"
                className="h-12 rounded-full bg-foreground/70 px-4 text-lg text-background backdrop-blur-lg hover:bg-foreground"
              >
                <Grid2X2 />
                Send a message
              </Button>
            </motion.div>
          </motion.div>
    
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

export { FloatingActionMenu };
