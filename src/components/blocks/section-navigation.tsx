"use client"

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Section = {
  id: string;
  label: string;
}

interface SectionNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  sections: Section[];
  scrollMarginTop?: number;    // Scroll offset in px
}

function SectionNavigation({ className, sections, scrollMarginTop = 100 }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll spy handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 210;
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

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
    <nav className={cn(className)}>
      <ul className="flex flex-col gap-4 text-sm font-semibold text-foreground">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`bg-card block py-2 px-3 rounded border nav-button ${activeSection === id ? "nav-button-active" : ""} transition-all`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { SectionNavigation };
