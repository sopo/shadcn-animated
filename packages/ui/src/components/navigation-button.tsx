import { ArrowRight } from "lucide-react"
import { Button } from "./button"
import type { ComponentProps } from "react"

type NavigationButtonProps = ComponentProps<typeof Button> & {
  iconVariant?: "icon-after" | "icon-before"
}

function NavigationButton({
  children,
  className,
  iconVariant = "icon-after",
  ...props
}: NavigationButtonProps) {
  const icon = (
    <ArrowRight className="transition-transform duration-380 ease-out group-hover:translate-x-1" />
  )

  return (
    <Button
      className={`group ${iconVariant === "icon-before" ? "gap-2" : "gap-1"} ${className ?? ""}`}
      {...props}
    >
      {iconVariant === "icon-before" && icon}
      {children}
      {iconVariant === "icon-after" && icon}
    </Button>
  )
}

export { NavigationButton }
