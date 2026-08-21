import { Tabs, TabsList, TabsTrigger } from "shadcn-animated";
import CommandTab from "../command-tab";
import ManualTab from "../manual-tab";
import DocsSection from "../docs-section";
import DocsShell from "../docs-shell";
import TabsPreview from "./tabs-preview";
import Bash from "../bash";

const TabDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-2xl">Tabs</h1>
        <DocsShell>
          <TabsPreview />
        </DocsShell>
      </DocsSection>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Installation</h2>
        <Tabs defaultValue="command" className="">
          <TabsList>
            <TabsTrigger value="command">Command</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <CommandTab>
            <Bash code={""} />
          </CommandTab>
          <ManualTab>mnl</ManualTab>
        </Tabs>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>
      </div>
    </div>
  );
};

export default TabDocs;
