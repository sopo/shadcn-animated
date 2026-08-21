import { TabsContent } from "shadcn-animated";

import type { PropsWithChildren } from "react";

const ManualTab: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <TabsContent value="manual">
      <div className="w-full rounded-2xl p-4 bg-card flex flex-col gap-2">
        <h2>Manual</h2>

        <div>{children}</div>
      </div>
    </TabsContent>
  );
};
export default ManualTab;
