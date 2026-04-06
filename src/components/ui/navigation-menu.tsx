import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { FadeMask } from "@/components/ui/fade-mask";

// -------- NavigationMenu --------
interface NavigationMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fadeMask?: boolean;
}

function NavigationMenu({ className, children, fadeMask = false, ...props }: NavigationMenuProps) {
  return (
    <div
      data-slot="navigation-menu"
      className={cn("fixed z-10 bottom-0 pt-5 pb-5 sm:top-0 sm:pt-5 sm:pb-5 sm:bottom-auto w-full flex items-center justify-center", className)}
      {...props}
    >
      {fadeMask && (
        <>
          <FadeMask direction={"bottom"} className="bg-background backdrop-blur-3xl -mb-5 hidden sm:block" />
          <FadeMask direction={"top"} className="bg-background backdrop-blur-3xl sm:hidden" />
        </>
      )}
      {children}
    </div>
  );
}

// -------- NavigationItemContainer --------
interface NavigationItemContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

function NavigationItemContainer({ children, className, asChild = false, ...props }: NavigationItemContainerProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="menu-item"
      className={cn("flex flex-rows gap-1 items-center border-1 rounded-xl p-1 font-mono backdrop-blur-xs bg-background/70", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

// -------- MenuItem --------
interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

function MenuItem({ children, className, asChild = false, ...props }: MenuItemProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="menu-item"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

// -------- MenuItemButton --------
function MenuItemButton({ children, className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button data-slot="menu-item-button" className={cn("rounded-lg", className)} variant={"tab"} size={"sm"} {...props}>
      {children}
    </Button>
  );
}

// -------- MenuItemLink --------
function MenuItemLink({ children, href, className, ...props }: React.ComponentProps<typeof Button> & React.ComponentProps<typeof Link>) {
  return (
    <Button asChild data-slot="menu-item-link" className={cn("rounded-lg", className)} variant={"tab"} size={"sm"} {...props}>
      <Link href={href}>
        {children}
      </Link>
    </Button>
  );
}

// -------- MenuItemLabel --------
interface MenuItemLabelProps {
  children: React.ReactNode;
  className?: string;
}

function MenuItemLabel({ className, children }: MenuItemLabelProps) {
  return <span data-slot="menu-item-label" className={cn("hidden sm:flex", className)}>{children}</span>;
}

// -------- MenuItemSeparator --------
interface MenuItemSeparatorProps {
  className?: string;
}

function MenuItemSeparator({ className }: MenuItemSeparatorProps) {
  return <hr className={cn("w-0.25 h-4 border bg-border rounded-full rotate-0", className)} />;
}

// -------- MenuItemThemeToggle --------
function MenuItemThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <MenuItemButton
      data-slot="menu-item-theme-toggle"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
    >
      <Sun className="hidden dark:flex" aria-label="Light Theme" />
      <Moon className="dark:hidden" aria-label="Dark Theme" />
    </MenuItemButton>
  );
}

// -------- Exports --------
export {
  NavigationMenu,
  NavigationItemContainer,
  MenuItem,
  MenuItemButton,
  MenuItemLink,
  MenuItemLabel,
  MenuItemSeparator,
  MenuItemThemeToggle
};
