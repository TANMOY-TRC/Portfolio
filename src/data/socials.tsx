import { Github, Gitlab, Linkedin, Mail } from "lucide-react";
import { FaOrcid } from "react-icons/fa6";
import { SiScopus } from "react-icons/si";

import type { Socials, SocialsDictionary } from "@/types/socials";

const socials = {
  email: {
    title: "Email",
    icon: <Mail />,
    href: "mailto: roytanmoy45@yahoo.com"
  },
  linkedin: {
    title: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/tanmoy-trc/"
  },
  github: {
    title: "GitHub",
    icon: <Github />,
    href: "https://www.github.com/TANMOY-TRC/"
  },
  gitlab: {
    title: "GitLab",
    icon: <Gitlab />,
    href: "https://www.gitlab.com/TANMOY-TRC/"
  },
  orcid: {
    title: "ORCID",
    icon: <FaOrcid />,
    href: "https://orcid.org/0009-0006-0452-2772"
  },
  scopus: {
    title: "Scopus",
    icon: <SiScopus />,
    href: "https://www.scopus.com/authid/detail.uri?authorId=58916164200"
  }
} satisfies SocialsDictionary;

export const homeSocials: Socials = [
  socials.linkedin,
  socials.github,
  socials.email
];

export const footerSocials: Socials = [
  socials.linkedin,
  socials.github,
  socials.gitlab,
  socials.email
];

export const researchSocials: Socials = [
  socials.orcid,
  socials.scopus
];
