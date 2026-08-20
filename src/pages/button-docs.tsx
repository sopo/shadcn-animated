import DocsSection from "@/components/domain/docs-section";
import DocsShell from "@/components/domain/docs-shell";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommandTab from "./components/command-tab";
import ManualTab from "./components/manual-tab";
import UsageShell from "./components/usage-shell";

const ButtonDocs = () => {
  return (
    <div className="flex flex-col gap-12">
      <DocsSection>
        <h1 className="text-2xl">Button</h1>
        <DocsShell>
          <Button>Button</Button>
        </DocsShell>
      </DocsSection>
   <div className="flex flex-col gap-4 bg-red-100">
        <h2 className="text-xl">Installation</h2>
        <div className="bg-green-400">
          <Tabs defaultValue="command">
            <TabsList>
              <TabsTrigger value="command">Command</TabsTrigger>
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>

            <CommandTab>ASD</CommandTab>

            <ManualTab>mnl</ManualTab>
          </Tabs>
        </div>
</div>


        <div className="bg-yellow-200">esss</div>
   
    </div>
  );
};

export default ButtonDocs;
