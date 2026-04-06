import React from "react";

type SocialEntry = {
  title: string;
  icon: React.ReactElement;
  href: string;
};

export type SocialsDictionary = {
  [social: string]: SocialEntry;
};

export type Socials = SocialEntry[];
