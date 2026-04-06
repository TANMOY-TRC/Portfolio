export type BlogMetadata = {
  title: string;
  summary: string;
  date: string;
  image?: string;
  keywords: string[];
  published: boolean;
};

export type BlogPost = {
  slug: string;
  metadata: BlogMetadata;
  content: string;
};
