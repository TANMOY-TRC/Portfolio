import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

interface IconSlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement;
}

function IconSlot({ children, className, ...props }: IconSlotProps) {
  if (!React.isValidElement(children)) return null;

  return (
    <Slot className={cn(className)} {...props}>
      {children}
    </Slot>
  );
}

export { IconSlot };
