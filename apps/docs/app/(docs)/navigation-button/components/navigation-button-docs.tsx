import {
  NavigationButton,
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
import NavigationButtonPreview from "./navigation-button-preview";

const NavigationButtonDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-3xl">Navigation Button</h1>
        <DocsShell>
          <NavigationButtonPreview />
        </DocsShell>
      </DocsSection>

      <div className="flex flex-col gap-8">
        <h2 className="text-xl">Installation</h2>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">1. Install dependencies</h2>
          <Bash code="npx shadcn-animated add button" />
        </div>
        <h2 className="text-xl">2. Install navigation button</h2>
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
            <Bash code="npx shadcn-animated add navigation-button" />
          </TabsContent>
          <TabsContent value="manual" className="flex flex-col gap-4">
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
import { NavigationButton } from "@/components/ui/navigation-button";        
                `}
          />
          <Code
            code={`
<NavigationButton>
    Hover me
</NavigationButton>
 `}
          />
        </div>
        <section className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h2 className="text-xl">Back icon</h2>
          </div>

          <DocsShell>
            <NavigationButton
              variant="default"
              iconVariant="before"
              className="rounded-full h-10 px-6 hover:bg-primary "
            >
              Hover me
            </NavigationButton>
          </DocsShell>

          <Code
            code={`
<NavigationButton
    iconVariant="before"
>
    Hover me
</NavigationButton>
    `}
          />
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h2 className="text-xl">Specify variant, size, or className</h2>
            <p className="text-muted-foreground">
              Customize the button using the same variant, size, and className
              options as shadcn/ui.
            </p>
          </div>

          <Code
            code={`
<NavigationButton
    variant="default"
    className="rounded-full h-10 px-6 hover:bg-primary "
>
 Hover me
</NavigationButton>
    `}
          />
        </section>
      </div>

      <NextSection title="Radio group" link="/radio-group" />
    </div>
  );
};

export default NavigationButtonDocs;

const manualCode = String.raw`
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./button";
import type { ComponentProps } from "react";

type NavigationButtonProps = ComponentProps<typeof Button> & {
  iconVariant?: "after" | "before";
};

function NavigationButton({
  children,
  className,
  iconVariant = "after",
  ...props
}: NavigationButtonProps) {
  const iconForward = (
    <ArrowRight className="transition-transform duration-380 ease-out group-hover:translate-x-1" />
  );

  const iconBack = (
    <ArrowLeft className="transition-transform duration-380 ease-out group-hover:-translate-x-1" />
  );

  return (
    <Button className={\`group \${className ?? ""}\`} {...props}>
      {iconVariant === "before" && iconBack}
      {children}
      {iconVariant === "after" && iconForward}
    </Button>
  );
}

export { NavigationButton };
`;
