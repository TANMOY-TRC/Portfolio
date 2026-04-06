import React from "react";

type SiteEntry = {
  icon: React.ReactElement;
  label: string;
  description: string;
  path: string;
};

export type SiteMap = {
  [site: string]: SiteEntry;
};
