import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type TextLogoProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function TextLogo({ children, className }: TextLogoProps) {
  return (
    <div data-slot="text-logo" className={cn("pointer-events-none select-none w-full p-1 flex items-center justify-center border-1 rounded-xl font-mono bg-background/80 backdrop-blur-xs", className)}>
      <Button asChild variant={"tab"} size={"sm"} inert>
        <span className="flex justify-center items-center">
          {children}
        </span>
      </Button>
    </div>
  );
}

export { TextLogo };
