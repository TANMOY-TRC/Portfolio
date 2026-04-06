import { HomeIcon, CircleUserRound, Grid2x2, BookMarked, FileBadge, NotebookPen } from "lucide-react";

import type { SiteMap } from "@/types/sitemap";

export const sitemap = {
  home: {
    icon: <HomeIcon />,
    label: "Home",
    description: "Engineer by passion, researcher by curiosity",
    path: "/"
  },
  about: {
    icon: <CircleUserRound />,
    label: "About",
    description: "Background, experience and expertise",
    path: "/about"
  },
  work: {
    icon: <Grid2x2 />,
    label: "Work",
    description: "Impactful projects and technologies",
    path: "/work"
  },
  research: {
    icon: <BookMarked />,
    label: "Research",
    description: "Research interests and publications",
    path: "/research"
  },
  credential: {
    icon: <FileBadge />,
    label: "Credential",
    description: "Certifications and achievements",
    path: "/credential"
  },
  blog: {
    icon: <NotebookPen />,
    label: "Blog",
    description: "Insights, stories and reflections",
    path: "/blog"
  }
} satisfies SiteMap;
