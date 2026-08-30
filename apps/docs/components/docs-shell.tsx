import type { PropsWithChildren } from "react";

const DocsShell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-100 bg-primary/3 rounded-3xl flex items-center justify-center ">
      <div>{children}</div>
    </div>
  );
};
export default DocsShell;
