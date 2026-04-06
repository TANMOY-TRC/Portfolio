import React from "react";

import { cn } from "@/lib/utils";

// -------- PageContainer --------
function PageContainer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-container"
      className={cn(
        "min-h-svh max-w-250 mx-auto p-4 sm:p-5 sm:pt-0",
        className
      )}
      {...props}
    />
  );
}

// -------- FlexContainer --------
function FlexContainer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="flex-container"
      className={cn(
        "flex flex-col md:flex-row gap-0 md:gap-15",
        className
      )}
      {...props}
    />
  );
}

// -------- SidePanel --------
function SidePanel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="side-panel"
      className={cn(
        "w-full md:w-50 flex flex-col gap-10 justify-center static md:sticky md:top-35 self-start",
        className
      )}
      {...props}
    />
  );
}

// -------- SectionContainer --------
function SectionContainer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-container"
      className={cn(
        "min-w-0 flex flex-col flex-1 gap-15 sm:gap-20 md:gap-25",
        className
      )}
      {...props}
    />
  );
}

// -------- Section --------
function Section({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <section
      data-slot="section"
      className={cn(className)}
      {...props}
    />
  );
}

// -------- TopSpacer --------
function TopSpacer({ className }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="top-spacer"
      className={cn(
        "h-20 sm:h-30 md:h-35",
        className
      )}
    />
  );
}

// -------- BottomSpacer --------
function BottomSpacer({ className }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bottom-spacer"
      className={cn(
        "h-10 sm:h-15 md:h-20",
        className
      )}
    />
  );
}

// -------- Exports --------
export {
  PageContainer,
  FlexContainer,
  SidePanel,
  SectionContainer,
  Section,
  TopSpacer,
  BottomSpacer
};
