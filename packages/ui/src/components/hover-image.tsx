"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Children,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../lib/utils";
import { HoverCardContent } from "./hover-card";

interface CardLayoutOptions {
  index: number;
  total: number;
  cardWidth: number;
  containerWidth: number;
  maxRotation: number;
  curveHeight: number;
  prefersReducedMotion: boolean | null;
}

/**
 * Calculates positioning, rotation angle, and entrance offsets for an individual
 * card in the fanned deck layout. Single cards are centered horizontally, while
 * multiple cards spread out along a subtle parabolic curve.
 */
function getCardLayout({
  index,
  total,
  cardWidth,
  containerWidth,
  maxRotation,
  curveHeight,
  prefersReducedMotion,
}: CardLayoutOptions) {
  const maxSpread = Math.max(0, containerWidth - cardWidth - 16);
  const centeredLeft = (containerWidth - cardWidth) / 2;

  const progress = total <= 1 ? 0.5 : index / (total - 1);
  const left = total <= 1 ? centeredLeft : 8 + progress * maxSpread;
  const bottom = 4 + Math.sin(progress * Math.PI) * curveHeight;
  const rotation =
    total <= 1 || prefersReducedMotion
      ? 0
      : -maxRotation + progress * (maxRotation * 2);
  const startX = prefersReducedMotion ? 0 : -progress * 40;

  return { left, bottom, rotation, startX };
}

export interface HoverImageProps
  extends ComponentPropsWithoutRef<typeof HoverCardContent> {
  children: ReactNode;
  /** Width of each individual card in pixels (default: 160) */
  cardWidth?: number;
  /** Total container width in pixels (default: 320) */
  containerWidth?: number;
  /** Tailwind container height class (default: 'h-52') */
  containerHeight?: string;
  /** Maximum rotation angle in degrees for outer cards (default: 12) */
  maxRotation?: number;
  /** Vertical arc height in pixels (default: 4) */
  curveHeight?: number;
  /** Animation stagger delay between cards in seconds (default: 0.035) */
  stagger?: number;
  /** Optional custom class name for each card wrapper */
  cardClassName?: string;
}

const HoverImage = ({
  children,
  cardWidth = 160,
  containerWidth = 320,
  containerHeight = "h-52",
  maxRotation = 12,
  curveHeight = 4,
  stagger = 0.035,
  cardClassName,
  className,
  side = "top",
  sideOffset = 8,
  style,
  ...props
}: HoverImageProps) => {
  const prefersReducedMotion = useReducedMotion();
  const cards = Children.toArray(children);
  const total = cards.length;

  return (
    <HoverCardContent
      side={side}
      sideOffset={sideOffset}
      className={cn(
        "w-80 border-0 bg-transparent p-0 shadow-none ring-0",
        className
      )}
      style={{ width: containerWidth, ...style }}
      {...props}
    >
      <div className={cn("relative w-full", containerHeight)}>
        {cards.map((child, index) => {
          const { left, bottom, rotation, startX } = getCardLayout({
            index,
            total,
            cardWidth,
            containerWidth,
            maxRotation,
            curveHeight,
            prefersReducedMotion,
          });

          const key =
            isValidElement(child) && child.key != null ? child.key : index;

          return (
            <motion.div
              key={key}
              initial={{
                opacity: 0,
                scale: prefersReducedMotion ? 1 : 0.8,
                rotate: 0,
                x: startX,
                y: prefersReducedMotion ? 0 : 16,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: rotation,
                x: 0,
                y: 0,
              }}
              whileHover={
                prefersReducedMotion
                  ? { zIndex: 40 }
                  : {
                      scale: 1.06,
                      rotate: 0,
                      zIndex: 40,
                      transition: { duration: 0.15 },
                    }
              }
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 22,
                mass: 0.8,
                delay: prefersReducedMotion ? 0 : index * stagger,
              }}
              style={{
                left,
                bottom,
                width: cardWidth,
                zIndex: total - index,
              }}
              className={cn(
                "absolute w-40 rounded-xl border border-border/40 bg-background p-2 shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-shadow hover:shadow-2xl dark:shadow-[0_8px_25px_rgba(0,0,0,0.6)]",
                cardClassName
              )}
            >
              {child}
            </motion.div>
          );
        })}
      </div>
    </HoverCardContent>
  );
};

export { HoverImage, getCardLayout };
