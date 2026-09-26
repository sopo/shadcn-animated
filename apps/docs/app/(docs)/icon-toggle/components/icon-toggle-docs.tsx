import {
  IconToggle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "shadcn-animated";
import DocsSection from "../../../../components/docs-section";
import DocsShell from "../../../../components/docs-shell";
import Bash from "../../../../components/bash";
import Code from "../../../../components/code-block";
import NextSection from "../../../../components/next-section";
import IconTogglePreview from "./icon-toggle-preview";
import { Check, Copy } from "lucide-react";

const IconToggleDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-3xl">Icon toggle</h1>
        <DocsShell>
          <IconTogglePreview />
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
            <Bash code="npx shadcn-animated add icon-toggle" />
          </TabsContent>
          <TabsContent value="manual" className="flex flex-col gap-4">
            <h2 className="font-medium">1. Install dependencies</h2>
            <Bash code="npx shadcn-animated add button" />
            <h2 className="font-medium">2. Copy the component</h2>
            <Code
              code={manualCode}
              expandable
              filename="components/ui/icon-toggle.tsx"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-xl">Usage</h2>
        <div className="flex flex-col gap-4">
          <Code
            code={`    
import { IconToggle } from "shadcn-animated";
import { Sun, Moon } from "lucide-react";         
                `}
          />
          <Code
            code={`
<IconToggle
    from={<Sun />}
    to={<Moon />}
/>
 `}
          />
        </div>
        <section className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h2 className="text-xl">Auto reset</h2>
            <p className="text-muted-foreground">
              Automatically switches back to the initial icon after 3 seconds. Is
            </p>
          </div>

          <DocsShell>
            <IconToggle
              className={`p-8 rounded-full hover:bg-backgound`}
              autoReset
              from={<Copy className="size-6" />}
              to={<Check className="size-6" />}
            />
          </DocsShell>

          <Code
            code={`
    <IconToggle
      autoReset
      from={<Copy className="size-6" />}
      to={<Check className="size-6" />}
    />
    `}
          />
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h2 className="text-xl">Specify delay</h2>
            <p className="text-muted-foreground">
              Set how long to wait before automatically switching back to the
              initial icon.
            </p>
          </div>

          <Code
            code={`
<IconToggle
    autoReset
    resetDelay={4000}
    from={<Copy className="size-6" />}
    to={<Check className="size-6" />}
/>
    `}
          />
        </section>


        <section className="flex flex-col gap-6">
          <div className="flex flex-col">
           <h2 className="text-xl">Specify variant, size, or className</h2> 
            <p className="text-muted-foreground">
              Customize the button using the same variant, size, and className options as shadcn/ui.
            </p>
          </div>

          <Code
            code={`
<IconToggle
    variant="secondary"
    className="p-8 rounded-full hover:bg-backgound"
    from={<Copy className="size-6" />}
    to={<Check className="size-6" />}
/>
    `}
          />
        </section>
      </div>

      <NextSection title="Radio group" link="/radio-group" />
    </div>
  );
};

export default IconToggleDocs;

const manualCode = String.raw`
"use client";

import { useState } from "react";
import { Button } from "shadcn-animated";
import type { ComponentProps } from "react";

type IconToggleProps = {
  from: React.ReactNode;
  to: React.ReactNode;
  autoReset?: boolean;
  resetDelay?: number;
} & Pick<ComponentProps<typeof Button>, "variant" | "size" | "className">;

function IconToggle({
  from,
  to,
  autoReset = false,
  resetDelay = 3000,
  variant = "outline",
  size = "icon",
  className,
  ...props
}: IconToggleProps) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (autoReset) {
      setActive(true);

      setTimeout(() => {
        setActive(false);
      }, resetDelay);
    } else {
      setActive((prev) => !prev);
    }
  };

  return (
    <Button
      {...props}
      size={size}
      variant={variant}
      onClick={handleClick}
      className={\`relative \${className ?? ""}\`}
    >
      <span
        className={\`absolute transition-all duration-300 ease-out will-change-[transform,opacity,filter] \${
          active
            ? "scale-[40%] opacity-0 blur-[0.2px]"
            : "scale-100 opacity-100 blur-0"
        }\`}
      >
        {from}
      </span>

      <span
        className={\`absolute transition-all duration-300 ease-out will-change-[transform,opacity,filter] \${
          active
            ? "scale-100 opacity-100 blur-0"
            : "scale-[40%] opacity-0 blur-[0.2px]"
        }\`}
      >
        {to}
      </span>
    </Button>
  );
}

export { IconToggle };
`;
