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

const manualCode = `
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

`;
