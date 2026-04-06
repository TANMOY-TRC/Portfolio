type PublicationEntry = {
  title: string;
  bookTitle: string;
  publisher?: string;
  type: string;
  doi?: string;
  authors: string;
  date: string;
  keywords?: string[];
  pdf?: string;
  sourceCode?: {
    github?: string;
    gitlab?: string;
  };
};

export type Publications = PublicationEntry[];
