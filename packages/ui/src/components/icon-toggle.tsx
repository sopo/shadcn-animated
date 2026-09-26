"use client";

import { useState } from "react";
import { Button } from "shadcn-animated";
import type { ComponentProps } from "react";

type IconToggleProps = {
  start: React.ReactNode;
  end: React.ReactNode;
  autoReset?: boolean;
  resetDelay?: number;
} & Pick<ComponentProps<typeof Button>, "variant" | "size" | "className">;

function IconToggle({
  start,
  end,
  autoReset = false,
  resetDelay = 3000,
  variant = "outline",
  size = "icon",
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
        {start}
      </span>

      <span
        className={`absolute transition-all duration-300 ease-out will-change-[transform,opacity,filter] ${
          active
            ? "scale-100 opacity-100 blur-0"
            : "scale-[40%] opacity-0 blur-[0.2px]"
        }`}
      >
        {end}
      </span>
    
    </Button>
  );
}

export { IconToggle };
