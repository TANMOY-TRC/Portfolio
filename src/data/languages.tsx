import { FaE } from "react-icons/fa6";

import { BanglaAlphabet, HindiAlphabet, HiraganaAlphabet } from "@/components/icons";

import type { Languages } from "@/types/languages";

export const languages: Languages = [
  {
    icon: <FaE />,
    language: "English",
    level: "Fluent (Professional)",
    skills: "Reading • Writing • Listening • Speaking",
    usage: "Academic and professional context"
  },
  {
    icon: <HindiAlphabet />,
    language: "Hindi",
    level: "Fluent (Professional)",
    skills: "Reading • Writing • Listening • Speaking",
    usage: "Formal and informal contexts"
  },
  {
    icon: <BanglaAlphabet />,
    language: "Bangla",
    level: "Fluent (Native)",
    skills: "Reading • Writing • Listening • Speaking",
    usage: "Native language"
  },
  {
    icon: <HiraganaAlphabet />,
    language: "Japanese",
    level: "Basic (Elementary)",
    skills: "Reading • Writing",
    usage: "Foundational understanding"
  }
];
