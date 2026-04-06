import React from "react";

import { cn } from "@/lib/utils";
import { TerminalChevron, TerminalUnderline } from "@/components/icons";

interface sectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  iconClassName?: string;
}

function SectionHeader({ title, className, iconClassName }: sectionHeaderProps) {
  return (
    <h1 data-slot="section-title" className={cn("font-semibold text-xl sm:text-2xl md:text-3xl flex items-center", className)}>
      <TerminalChevron className={cn("size-5.5 sm:size-6.5 md:size-8 text-primary stroke-3", iconClassName)} />
      <span>{title}</span>
      <TerminalUnderline className={cn("size-5.5 sm:size-6.5 md:size-8 text-primary stroke-3", iconClassName)} />
    </h1>
  );
}

export { SectionHeader };
