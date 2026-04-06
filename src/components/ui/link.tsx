"use client"

import React from "react";
import NextLink, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Slot } from "@radix-ui/react-slot";

type CustomLinkProps = LinkProps & {
  asChild?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

function Link({
  className,
  asChild = false,
  href,
  scroll = true,
  onClick,
  ...props
}: CustomLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  // To scroll to top of the page if pathname is same as current
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Call user-defined onClick first
    if (onClick) onClick(event);

    // If it's the same path, scroll to top
    if (pathname === href && scroll) {
      event.preventDefault();

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 50);

      // Replace the current URL with the same href to trigger router state update
      setTimeout(() => {
        router.replace(href);
      }, 50);
    }
  };

  if (asChild) {
    return (
      <Slot
        data-slot="link"
        className={className}
        onClick={handleClick}
        {...props}
      />
    );
  }

  return (
    <NextLink
      href={href}
      data-slot="link"
      className={className}
      onClick={handleClick}
      {...props}
    />
  );
}

export { Link };
