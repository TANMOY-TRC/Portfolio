type SectionEntry = {
  id: string;
  label: string;
};

export type Sections = {
  [section: string]: SectionEntry;
};
