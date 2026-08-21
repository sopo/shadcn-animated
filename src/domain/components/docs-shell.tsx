import type { PropsWithChildren } from "react";

const DocsShell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-100 bg-card rounded-3xl flex items-center justify-center ">
   
      <div>{children}</div>


    </div>
  );
};
export default DocsShell;
