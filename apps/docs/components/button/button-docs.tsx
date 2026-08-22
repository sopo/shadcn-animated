// import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn-animated";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../packages/ui/src/components/tabs";
import DocsSection from "../docs-section";
import DocsShell from "../docs-shell";
import ButtonPreview from "./button-preview";
import Bash from "../bash";
import Code from "../code-block";
import NextSection from "../next-section";

const ButtonDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-2xl">Button</h1>
        <DocsShell>
          <ButtonPreview />
        </DocsShell>
      </DocsSection>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Installation</h2>
        <Tabs defaultValue="command" className="w-full gap-4" >
          <TabsList className="rounded-full" variant="line">
            <TabsTrigger value="command" className="rounded-full">
              Command
            </TabsTrigger>
            <TabsTrigger value="manual" className="rounded-full">
              Manual
            </TabsTrigger>
          </TabsList>
          <TabsContent value="command" className="flex flex-col gap-4">
            <h2></h2>
            <Bash code="npx shadcn-animated add button" />
          </TabsContent>
          <TabsContent value="manual">
            <Bash code="" />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>
<div className="flex flex-col gap-4">
    <Code code={`import { Button } from "shadcn-animated";`}/>
    <Code code={`<Button>Button</Button>`} />
    </div>
      </div>

      <NextSection title="Tabs" link="/tabs" />
    </div>
  );
};

export default ButtonDocs;
