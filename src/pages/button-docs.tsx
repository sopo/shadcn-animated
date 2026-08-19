import DocsSection from "@/components/domain/docs-section";
import DocsShell from "@/components/domain/docs-shell";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InstallationShell from "./components/command-tab";
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
      <DocsSection>
        <h2 className="text-xl">Installation</h2>
        <div>
          <Tabs defaultValue="command">
            <TabsList variant="line">
              <TabsTrigger value="command">Command</TabsTrigger>
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>

            <CommandTab>ASD</CommandTab>

            <ManualTab>mnl</ManualTab>
          </Tabs>
        </div>
      </DocsSection>


        <UsageShell>asd</UsageShell>
   
    </div>
  );
};

export default ButtonDocs;
