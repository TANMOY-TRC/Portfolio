import React from "react";

export type Profile = {
  name: string;
  photo: string;
  roles: string[];
  activeRole: string;
  badgeText: string;
  tagline: React.ReactNode;
  missionStatement: string;
  bio: React.ReactNode;
  footerBio: React.ReactNode;
  copyrightYear: number;
  cv: string;
};
