import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <Tabs defaultValue="command">
          <TabsList>
            <TabsTrigger value="command">Command</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <CommandTab>cmd</CommandTab>
          <ManualTab>mnl</ManualTab>
        </Tabs>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>
      </div>
    </div>
  );
};

export default ButtonDocs;
