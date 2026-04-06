type ProjectEntry = {
  title: string;
  image: string;
  description: string;
  keywords?: string[];
  duration: string;
  link?: string;
  sourceCode?: {
    github?: string;
    gitlab?: string;
  };
};

export type Projects = ProjectEntry[];
