type ExperienceEntry = {
  position: string;
  company: string;
  location: string;
  duration: string;
  responsibilities?: string[];
  technologies?: string[];
};

export type Experiences = ExperienceEntry[];
