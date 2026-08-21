import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { PropsWithChildren } from "react";
import {  Plus } from "lucide-react";

import { Link } from "react-router";
import Bash from "./bash";
import { Button } from "@/components/ui/button";

const Shell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative h-100 bg-card rounded-3xl flex items-center justify-center flex-col">
      <div>{children}</div>

      <div className="flex items-center gap-2 w-full justify-between absolute bottom-0 p-4">
        <Sheet>
          <SheetTrigger>
            {" "}
            <Button
              size="icon-lg"
              variant="outline"
              className="rounded-full text-secondary-foreground"
            >
              <Plus strokeWidth={2.5} />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="pt-12 pb-20 bg-white/70 backdrop-blur-md"
          >
            <div className="max-w-3xl w-full px-4 lg:px-0 mx-auto flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-2xl font-medium">Button</SheetTitle>

                <Link to={"/"} className="text-blue-500 hover:underline">
                  View Docs
                </Link>
              </div>

              <Bash code={`npm install wiii`} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default Shell;


