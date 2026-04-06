import { Code, Boxes, Layers, AppWindowMac, Database, ChartColumnStacked, CloudLightning, Server } from "lucide-react";

import type { TechnicalExpertise } from "@/types/technical-experience";

export const technicalExpertise: TechnicalExpertise = [
  {
    icon: <Code />,
    title: "Programming Language",
    items: ["C", "C++", "Python", "Java", "MATLAB", "JavaScript", "TypeScript", "Kotlin", "PHP", "R", "HTML", "CSS"]
  },
  {
    icon: <Boxes />,
    title: "Framework",
    items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Django", "DRF", "Flask", "Scikit-Learn", "TensorFlow"]
  },
  {
    icon: <Layers />,
    title: "IDEs & Version Control",
    items: ["VS Code", "IntelliJ IDEA", "Git", "GitHub", "GitLab"]
  },
  {
    icon: <AppWindowMac />,
    title: "Software",
    items: ["Adobe Photoshop", "AutoCAD", "MS Office", "VirtualBox", "MySQL Workbench"]
  },
  {
    icon: <Database />,
    title: "Database",
    items: ["SQL*Plus", "MySQL", "SQLite", "MongoDB"]
  },
  {
    icon: <ChartColumnStacked />,
    title: "Analytics",
    items: ["PowerBI", "Tableau"]
  },
  {
    icon: <CloudLightning />,
    title: "DevOps & Cloud",
    items: ["Docker", "GCP", "AWS", "Azure", "Vercel", "Cloudflare"]
  },
  {
    icon: <Server />,
    title: "Operating System",
    items: ["Windows", "Linux", "MacOS"]
  }
];
