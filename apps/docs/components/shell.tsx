import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "shadcn-animated";
import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import Bash from "./bash";

export interface ShellProps {
  link: string;
  title: string;
  bash: string;
}

const Shell = ({
  children,
  props,
}: {
  children: ReactNode;
  props: ShellProps;
}) => {
  return (
    <div className="relative h-100 bg-primary/3 rounded-3xl flex items-center justify-center flex-col">
      <div>{children}</div>
      <div className="flex items-center gap-2 w-full justify-between absolute bottom-0 p-4">
        <Sheet>
          <SheetTrigger>
            <div className="rounded-full text-secondary-foreground p-3 hover:bg-primary/5 cursor-pointer scale-default">
              <Plus strokeWidth={2.5} />
            </div>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="pt-12 pb-20 bg-white/70 backdrop-blur-md"
          >
            <div className="max-w-3xl w-full px-4 lg:px-0 mx-auto flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-2xl font-medium">
                  {props.title}
                </SheetTitle>
                <Link href={props.link} className="linkClass">
                  View Docs
                </Link>
              </div>
              <Bash code={props.bash} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default Shell;
