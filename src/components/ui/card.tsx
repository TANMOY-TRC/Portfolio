import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

// Shared props
interface CardProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

// -------- Card --------
function Card({ className, asChild, ...props }: CardProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-md border p-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

// -------- CardContainer --------
function CardContainer({ className, asChild, ...props }: CardProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="card-header"
      className={cn(className)}
      {...props}
    />
  );
}

// -------- CardHeader --------
function CardHeader({ className, asChild, ...props }: CardProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="card-header"
      className={cn(className)}
      {...props}
    />
  );
}

// -------- CardTitle --------
function CardTitle({ className, asChild, ...props }: CardProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

// -------- CardDescription --------
function CardDescription({ className, asChild, ...props }: CardProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

// -------- CardContent --------
function CardContent({ className, asChild, ...props }: CardProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="card-content"
      className={cn(className)}
      {...props}
    />
  );
}

// -------- CardFooter --------
function CardFooter({ className, asChild, ...props }: CardProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="card-footer"
      className={cn("flex items-center [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

// -------- Exports --------
export {
  Card,
  CardContainer,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
};
