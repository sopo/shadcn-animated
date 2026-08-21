import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn-animated";
import CommandTab from "../command-tab";
import ManualTab from "../manual-tab";
import DocsSection from "../docs-section";
import DocsShell from "../docs-shell";
import ButtonPreview from "./button-preview";

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
            <Tabs defaultValue="account" className="w-full flex-col">
      <TabsList className="rounded-full">
        <TabsTrigger value="account" className="rounded-full">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className="rounded-full">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="password">ad</TabsContent>
       <TabsContent value="account">sad</TabsContent>
    </Tabs>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>
      </div>
    </div>
  );
};

export default ButtonDocs;
