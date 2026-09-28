"use client";

import { useState } from "react";

import type { ComponentProps } from "react";
import { Button } from "./button";

type ButtonProps = ComponentProps<typeof Button>;

type IconToggleProps = Omit<
  ButtonProps,
  "variant" | "size" | "className" | "onClick"
> & {
  from: React.ReactNode;
  to: React.ReactNode;
  autoReset?: boolean;
  resetDelay?: number;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
};
function IconToggle({
  from,
  to,
  autoReset = false,
  resetDelay = 3000,
  variant = "outline",
  size = "icon-lg",
  className,
  ...props
}: IconToggleProps) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (autoReset) {
      setActive(true);

      setTimeout(() => {
        setActive(false);
      }, resetDelay);
    } else {
      setActive((prev) => !prev);
    }
  };

  return (
    <Button
      {...props}
      size={size}
      variant={variant}
      onClick={handleClick}
      className={`relative ${className ?? ""}`}
    >
      <span
        className={`absolute transition-all duration-300 ease-out will-change-[transform,opacity,filter] ${
          active
            ? "scale-[40%] opacity-0 blur-[0.2px]"
            : "scale-100 opacity-100 blur-0"
        }`}
      >
        {from}
      </span>

      <span
        className={`absolute transition-all duration-300 ease-out will-change-[transform,opacity,filter] ${
          active
            ? "scale-100 opacity-100 blur-0"
            : "scale-[40%] opacity-0 blur-[0.2px]"
        }`}
      >
        {to}
      </span>
    </Button>
  );
}

export { IconToggle };
