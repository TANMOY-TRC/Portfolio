"use client"

import { useEffect } from "react";
import { useTheme } from "next-themes";

function MetaThemeColor() {
  const { theme } = useTheme();

  useEffect(() => {
    let metaThemeColor = document.querySelector("meta[name='theme-color']");

    // If the meta tag doesn't exist, create it
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      document.head.appendChild(metaThemeColor);
    }

    // Set the color based on the theme
    if (theme === "dark") {
      metaThemeColor.setAttribute("content", "#000000");
    } else {
      metaThemeColor.setAttribute("content", "#FFFFFF");
    }
  }, [theme]);

  return null;
}

export { MetaThemeColor };
