import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn-animated";
import DocsSection from "../../../../components/docs-section";
import DocsShell from "../../../../components/docs-shell";
import Bash from "../../../../components/bash";
import Code from "../../../../components/code-block";
import NextSection from "../../../../components/next-section";
import HoverImagePreview from "./hover-image-preview";


const HoverImageDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-3xl">Hover image</h1>
        <DocsShell>
          <HoverImagePreview />
        </DocsShell>
      </DocsSection>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl">Installation</h2>

        <div className="flex flex-col gap-3">
          <h2 className="font-medium">1. Install dependencies</h2>
          <Bash code="npm install motion" />
            <Bash code="npx shadcn@latest add hover-card" />
        </div>


        <div className="flex flex-col gap-2">
          <h2 className="font-medium">2. Install hover image</h2>
          <Tabs defaultValue="command" className="w-full gap-4">
            <TabsList className="rounded-full" variant="line">
              <TabsTrigger value="command" className="rounded-full">
                Command
              </TabsTrigger>
              <TabsTrigger value="manual" className="rounded-full">
                Manual
              </TabsTrigger>
            </TabsList>
            <TabsContent value="command" className="flex flex-col gap-4">
              <Bash code="npx shadcn-animated add hover-image" />
            </TabsContent>
            <TabsContent value="manual">
              <Code
                code={manualCode}
                expandable
                filename="components/ui/hover-image.tsx"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>
        <div className="flex flex-col gap-4">
          <Code
            code={`
                
                import {
  Button,
  HoverCard,
  HoverCardTrigger,
  HoverImage,
} from "shadcn-animated";
                
                
                `}
          />
          <Code
            code={`
                
                 <div className="p-20 text-center">
      <HoverCard>
        <span className="text-3xl font-medium text-secondary-foreground">
          I grabbed a ☕ coffee, explored the sights 🏙️, and took plenty of{" "}
        </span>
        <HoverCardTrigger
          delay={10}
          closeDelay={100}
          render={
            <Button variant="link">
              <span className="text-3xl font-medium">📸 photos</span>
            </Button>
          }
        />
        <span className="text-3xl font-medium text-secondary-foreground">
          {" "}
          around London 🇬🇧 before catching my ✈️ flight home tonight.
        </span>

        <HoverImage>
          <img
            src="https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?w=900"
            alt="London"
            className="h-40 w-full rounded object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="London"
            className="max-h-40 w-full rounded object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1534011640498-530cfd0e854a?q=80&w=987"
            alt="London trip"
            className="max-h-40 w-full rounded object-cover"
          />
        </HoverImage>
      </HoverCard>
    </div>    
 `}
          />
        </div>
      </div>

      <NextSection title="Radio group" link="/radio-group" />
    </div>
  );
};

export default HoverImageDocs;

const manualCode = `"use client";

import {
  Children,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import { HoverCardContent } from "./hover-card";
import { cn } from "@/lib/utils";

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
  cardWidth?: number;
  containerWidth?: number;
  containerHeight?: string;
  maxRotation?: number;
  curveHeight?: number;
  stagger?: number;
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
`;
