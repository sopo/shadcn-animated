import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type { PropsWithChildren } from "react";

import { Copy, Plus } from "lucide-react";
import { Button } from "../ui/button";

const Shell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative h-100 bg-card rounded-3xl flex items-center justify-center flex-col">
      <div>
        <Button
          size="icon-lg"
          variant="outline"
          className="absolute top-4 right-4 text-secondary-foreground border border-foreground/5"
        >
          <Copy strokeWidth={2.5} />
        </Button>
      </div>
      <div>{children}</div>

      <div className="flex items-center gap-2 w-full justify-between absolute bottom-0 p-4">
        {/* <div>
        <Button className="" variant="secondary">View Docs</Button>
      </div> */}
        <Button
          size="icon-lg"
          variant="outline"
          className="rounded-full text-secondary-foreground"
        >
          <Plus strokeWidth={2.5} />
        </Button>
            <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent side="bottom" className="py-12 ">
    <div className="max-w-3xl w-3xl mx-auto flex flex-col gap-4">
       <SheetTitle className="text-xl font-medium">Button</SheetTitle>
      <div>
        <h2 className="text-lg">Install</h2>
        <p>npm i wi</p>
      </div>
    <div className=" items-center gap-4 bg-red-200 flex">
     
      <div className="flex-1 h-100 bg-card rounded-3xl flex items-center justify-center">
        <Button>Click</Button>
     </div>
     <div className="flex-1">
   
      <Button className="outline">View Docs</Button>
      <Button className="outline">Copy code</Button>
      <Button className="outline">Docs</Button>
     </div>
    </div>
    </div>
  </SheetContent>
</Sheet>
      </div>
    </div>
  );
};
export default Shell;

// const More=()=>{
//   return(

//   )
// }
