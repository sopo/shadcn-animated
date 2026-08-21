import type { PropsWithChildren } from "react";
import { Button } from "../ui/button";

const DomainButton:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Button
      size="lg"
      className="rounded-full px-4 bg-[#3383EF]/5 text-[#3383EF] hover:bg-[#3383EF]/10 font-normal"
    >
      {children}
    </Button>
  );
};
export default DomainButton;
