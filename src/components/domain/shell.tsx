import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { PropsWithChildren } from "react";
import { Copy, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";

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
          <SheetContent side="bottom" className="pt-12 pb-20 bg-white/70 backdrop-blur-md">
            <div className="max-w-3xl w-full px-4 lg:px-0 mx-auto flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-2xl font-medium">Button</SheetTitle>

                <Link
                  to={"/"}
                  className="text-blue-500 hover:underline"
                >
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

const Bash = ({ code }: { code: string }) => {
  const copyCode = () => {
    console.log("copied");
  };
  return (
    <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-black/3 gap-2">
      <p className="font-code text-neutral-600 font-normal">{code}</p>

      <Button
        size="icon-lg"
        variant={`outline`}
        className={`bg-white/60 hover:bg-white/60`}
      >
        <Copy />
        {/* {state.value ? 'Copied!' : 'Copy code'} */}
      </Button>
    </div>
  );
};
