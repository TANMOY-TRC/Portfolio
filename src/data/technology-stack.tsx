import { Code2, Server, Database, MonitorSmartphone, Layers, Cloud, Lightbulb, ChartColumnStacked } from "lucide-react";

import type { TechnologyStack } from "@/types/technology-stack";

export const technologyStack: TechnologyStack = [
  {
    icon: <Code2 />,
    title: "Front-End",
    items: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    icon: <Server />,
    title: "Back-End",
    items: ["Django", "DRF", "Flask"]
  },
  {
    icon: <Database />,
    title: "Database",
    items: ["MySQL", "SQLite", "MongoDB"]
  },
  {
    icon: <MonitorSmartphone />,
    title: "App Development",
    items: ["Expo", "Kotlin (Android)"]
  },
  {
    icon: <Layers />,
    title: "IDEs & Version Control",
    items: ["VS Code", "Git", "GitHub"]
  },
  {
    icon: <Cloud />,
    title: "Hosting Platform",
    items: ["Vercel", "Cloudflare"]
  },
  {
    icon: <Lightbulb />,
    title: "Productivity",
    items: ["ChatGPT", "Gemini", "Cloude"]
  },
  {
    icon: <ChartColumnStacked />,
    title: "Analytics",
    items: ["PowerBI", "Tableau"]
  }
];
