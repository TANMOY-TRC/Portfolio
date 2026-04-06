"use client"

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { TOCItem } from "./utils";

interface MDXToCProps extends React.ComponentProps<"div"> {
  mdxTOC: TOCItem[];
  levelPadding?: number;        // px per heading level
  scrollMarginTop?: number;     // Scroll offset in px
}

export function MDXTableOfContent({ className, mdxTOC, levelPadding = 16, scrollMarginTop = 100 }: MDXToCProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Find the maximum heading level for normalization
  const minLevel = Math.min(...mdxTOC.map(item => item.level));

  // Scroll spy handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      mdxTOC.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mdxTOC]);

  useEffect(() => {
    // Removes any hash from URL (Keeps URL clean)
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -scrollMarginTop;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });

    // Removes any hash from URL (Keeps clean URL)
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    setActiveSection(id);
  };

  return (
    <aside className={cn(className)}>
      <p className="font-bold text-primary mb-2">ON THIS PAGE</p>
      <ul className="list-none pl-0 ml-0">
        {mdxTOC.map(item => {
          // Normalize margin so highest level is always aligned nicely
          const normalizedMargin = (((item.level - 1) / (minLevel - 1)) - 1) * levelPadding;

          return (
            <li
              key={item.id}
              className={`toc-item ${activeSection === item.id ? "active-toc-item" : ""} transition-all`}
              style={{ marginLeft: normalizedMargin }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
