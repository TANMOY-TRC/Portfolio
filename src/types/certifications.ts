type CertificationEntry = {
  title: string;
  category?: string;
  provider: string;
  date: string;
  href?: string;
};

export type Certifications = CertificationEntry[];
