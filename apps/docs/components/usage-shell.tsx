

import type { PropsWithChildren } from "react";

const UsageShell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
  
      <section className="w-full flex flex-col gap-4">
        <h2 className="text-xl">Usage</h2>

        <div className="w-full h-75 bg-card p-4 flex flex-col gap-2 rounded-2xl">{children}</div>
      </section>

  );
};
export default UsageShell;
