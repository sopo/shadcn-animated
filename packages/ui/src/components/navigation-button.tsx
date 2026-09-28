import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./button";
import type { ComponentProps } from "react";

type NavigationButtonProps = ComponentProps<typeof Button> & {
  iconVariant?: "after" | "before";
};

function NavigationButton({
  children,
  className,
  iconVariant = "after",
  ...props
}: NavigationButtonProps) {
  const iconForward = (
    <ArrowRight className="transition-transform duration-380 ease-out group-hover:translate-x-1" />
  );
  const iconBack = (
    <ArrowLeft className="transition-transform duration-380 ease-out group-hover:-translate-x-1" />
  );

  return (
    <Button className={`group ${className ?? ""}`} {...props}>
      {iconVariant === "before" && iconBack}
      {children}
      {iconVariant === "after" && iconForward}
    </Button>
  );
}

export { NavigationButton };
