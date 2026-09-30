import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn-animated";
import DocsSection from "../../../../components/docs-section";
import DocsShell from "../../../../components/docs-shell";
import Bash from "../../../../components/bash";
import Code from "../../../../components/code-block";
import NextSection from "../../../../components/next-section";
import ImageCardPreview from "./image-card-preview";

const ImageCardDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-3xl">Image card</h1>
        <DocsShell>
          <ImageCardPreview />
        </DocsShell>
      </DocsSection>

      <div className="flex flex-col gap-8">
        <h2 className="text-xl">Installation</h2>

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
            <Bash code="npx shadcn-animated add image-card" />
          </TabsContent>
          <TabsContent value="manual" className="flex flex-col gap-4">
            <Code
              code={manualCode}
              expandable
              filename="components/ui/image-card.tsx"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-xl">Usage</h2>
        <div className="flex flex-col gap-4">
          <Code
            code={` 
               import {
  BackImage,
  ImageCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FrontImage,
  ImageArea,
} from "@/components/ui/image-card"; 
                
                `}
          />
          <Code
            code={`
<ImageCard className="max-w-md">
    <ImageArea>
        <BackImage>
            <img
              className="rounded-2xl shadow-xl"
              src="https://plus.unsplash.com/premium_photo-1786868126588-39f864726bd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            />
        </BackImage>
        <FrontImage>
            <img
              className="rounded-2xl shadow-xl"
              src="https://plus.unsplash.com/premium_photo-1789990372226-2b073696f52b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
            />
        </FrontImage>
    </ImageArea>
    <CardContent>
        <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              Half-Day Trip from the city
            </CardTitle>
            <CardDescription className="text-xl">
              Learn about Impressionism with your guide, explore the village and
              the artist’s tomb, and enjoy free time to wander his iconic house
              and colorful gardens.
            </CardDescription>
        </CardHeader>
    </CardContent>
</ImageCard>
/>
 `}
          />
        </div>
      </div>

      <NextSection title="Navigation button" link="/navigation-button" />
    </div>
  );
};

export default ImageCardDocs;

const manualCode = String.raw`
import * as React from "react";
import { cn } from "cn";

function ImageCard({
  className,
  children,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "sm";
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card group relative flex w-full cursor-pointer flex-col",
        "gap-(--card-spacing)",
        "rounded-xl",
        "py-(--card-spacing)",
        "text-sm text-card-foreground",
        "[--card-spacing:--spacing(4)]",
        "overflow-visible",
        "data-[size=sm]:[--card-spacing:--spacing(3)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type ImageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

function ImageArea({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative grid w-full overflow-visible", className)}>
      {children}
    </div>
  );
}

function BackImage({ children, className }: ImageWrapperProps) {
  return (
    <div
      className={cn(
        "col-start-1 row-start-1",
        "w-full self-start",
        "-rotate-2",
        "transition-transform duration-300 ease-out",
        "group-hover:-translate-x-8",
        "group-hover:-rotate-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

function FrontImage({ children, className }: ImageWrapperProps) {
  return (
    <div
      className={cn(
        "col-start-1 row-start-1",
        "w-full self-start",
        "rotate-2",
        "transition-transform duration-300 ease-out",
        "group-hover:translate-x-8",
        "group-hover:rotate-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid",
        "auto-rows-min items-start gap-1",
        "rounded-t-xl px-(--card-spacing)",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "cn-font-heading text-base leading-snug font-medium",
        "group-data-[size=sm]/card:text-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1",
        "self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-(--card-spacing)", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-(--card-spacing)", className)}
      {...props}
    />
  );
}

export {
  ImageCard,
  ImageArea,
  FrontImage,
  BackImage,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};

`;
