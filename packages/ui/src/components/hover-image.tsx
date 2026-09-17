"use client";

import { HoverCardContent } from "shadcn-animated";
import { motion } from "motion/react";
import { Children, type ReactNode } from "react";

type HoverImageProps = {
  children: ReactNode;
};

const HoverImage = ({ children }: HoverImageProps) => {
  const cards = Children.toArray(children);
  const total = cards.length;

  const cardWidth = 160;
  const containerWidth = 320;
  const maxSpread = containerWidth - cardWidth - 8;

  return (
    <HoverCardContent
      side="top"
      className="w-80 border-0 bg-transparent p-0 shadow-none ring-0"
    >
      <div className="relative h-52 w-full">
        {cards.map((child, index) => {
          const progress = total <= 1 ? 0 : index / (total - 1);
          const left = total <= 1 ? 8 : 8 + progress * maxSpread;
          const bottom = 4 + Math.sin(progress * Math.PI) * 4;
          const maxRotation = 12;
          const rotation =
            total <= 1 ? 0 : -maxRotation + progress * (maxRotation * 2);
          const startX = -progress * 50;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.75,
                rotate: 0,
                x: startX,
                y: 16,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: rotation,
                x: 0,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.8,
              }}
              style={{
                left,
                bottom,

                zIndex: total - index,
              }}
              className="
                absolute
                w-40
                rounded-lg
                bg-background
                p-2
                shadow-[0_8px_25px_rgba(0,0,0,0.25)]
              "
            >
              {child}
            </motion.div>
          );
        })}
      </div>
    </HoverCardContent>
  );
};

export { HoverImage };
