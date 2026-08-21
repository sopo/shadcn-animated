import { TabsContent } from "@/components/ui/tabs";

import type { PropsWithChildren } from "react";

const CommandTab: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <TabsContent value="command">
      <div className="w-full rounded-2xl p-4 bg-card flex flex-col gap-2">
        <h2>Command</h2>

        <div>{children}</div>
      </div>
    </TabsContent>
  );
};
export default CommandTab;
