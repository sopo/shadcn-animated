import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsPreview = () => {
  return (
    <Tabs defaultValue="account" className="w-full ">
      <TabsList className="rounded-full">
        <TabsTrigger value="account" className="rounded-full">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className="rounded-full">
          Password
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
export default TabsPreview;
