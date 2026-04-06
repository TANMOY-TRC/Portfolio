import React from "react";

type LanguageEntry = {
  icon: React.ReactElement;
  language: string;
  level: string;
  skills: string;
  usage?: string;
};

export type Languages = LanguageEntry[];
