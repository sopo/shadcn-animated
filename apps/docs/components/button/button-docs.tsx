// import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn-animated";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../packages/ui/src/components/tabs";
import DocsSection from "../docs-section";
import DocsShell from "../docs-shell";
import ButtonPreview from "./button-preview";
import Bash from "../bash";

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
              Manualadsadadasda
            </TabsTrigger>
          </TabsList>

          <TabsContent value="command">
            <Bash code="npx shadcn-animated add button" />
          </TabsContent>
          <TabsContent value="manual">
            <Bash code="" />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>
      </div>
    </div>
  );
};

export default ButtonDocs;
