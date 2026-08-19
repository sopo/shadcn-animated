import DocsSection from "@/components/domain/docs-section";
import DocsShell from "@/components/domain/docs-shell";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

            <TabsContent value="command">
              <div className="w-full h-75 rounded-2xl bg-white">command</div>
            </TabsContent>
            <TabsContent value="manual">
              <div className="w-full h-75 rounded-2xl bg-card"></div>
            </TabsContent>
          </Tabs>
        </div>
      </DocsSection>

      <DocsSection>
        <h2 className="text-xl">Usage</h2>
        <div className="w-full h-150 rounded-2xl bg-white">
          <p>
            {`              
        import { Button } from "@/components/ui/button"
        <Button variant="outline">Button</Button>
        
        
        `}
          </p>
        </div>
      </DocsSection>
    </div>
  );
};

export default ButtonDocs;
