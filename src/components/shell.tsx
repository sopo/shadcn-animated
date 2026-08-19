import type { PropsWithChildren } from "react";
import { Button } from "./ui/button";
import {  Copy, Plus } from "lucide-react";

const Shell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative h-100 bg-card shadow-xs rounded-3xl flex items-center justify-center flex-col">
      <div>
        <Button
          size="icon-lg"
          variant="outline"
          className="absolute top-4 right-4 text-secondary-foreground border border-foreground/5"
        >
          <Copy strokeWidth={2.5} />
        </Button>
      </div>
      <div>
      {children}
      </div>
   
      <div className="flex items-center gap-2 w-full justify-between absolute bottom-0 p-4">
        {/* <div>
        <Button className="" variant="secondary">View Docs</Button>
      </div> */}
        <Button size="icon-lg" variant="outline" className="rounded-full text-secondary-foreground"><Plus strokeWidth={2.5} /></Button>
      </div>
    </div>
  );
};
export default Shell;
