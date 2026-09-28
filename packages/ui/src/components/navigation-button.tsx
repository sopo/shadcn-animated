import { ArrowRight } from "lucide-react"
import { Button } from "./button"
import type { ComponentProps } from "react"

function NavigationButton({
  children,
  className,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      className={`group ${className ?? ""}`}
      {...props}
    >
      {children}
      <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
    </Button>
  )
}

export { NavigationButton }
