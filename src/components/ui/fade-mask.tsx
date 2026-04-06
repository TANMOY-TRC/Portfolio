import React from "react";

import { cn } from "@/lib/utils";

type FadeMaskProps = {
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
};

function FadeMask({ direction = "bottom", className, style }: FadeMaskProps) {
  const gradientDirection = {
    top: "to top",
    bottom: "to bottom",
    left: "to left",
    right: "to right",
  }[direction];

  const maskGradient = `linear-gradient(${gradientDirection},
                        rgba(0, 0, 0, 1.0) 10%,
                        rgba(0, 0, 0, 0.9) 40%,
                        rgba(0, 0, 0, 0.8) 50%,
                        transparent 80%)`;

  return (
    <div
      data-slot="fade-mask"
      className={cn("absolute inset-0 pointer-events-none backdrop-blur-md", className)}
      style={{
        WebkitMaskImage: maskGradient,
        maskImage: maskGradient,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        ...style,
      }}
    />
  );
}

export { FadeMask };
