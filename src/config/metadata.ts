import { Metadata } from "next/types";

import { BASE_URL, DEFAULT_OG_IMAGE, DEFAULT_PAGE_DESCRIPTION, DEFAULT_PAGE_TITLE, DEFAULT_TWITTER_IMAGE } from "@/config";
import { urlJoin } from "@/lib/url-utils";

type GetMetadataArgs = {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  ogImage?: string;
  twitterImage?: string;
  authors?: string[];
  type?: "website" | "article";
};

export function getMetadata({
  pageTitle,
  pageDescription,
  pagePath,
  ogImage,
  twitterImage,
  authors,
  type = "website",
}: GetMetadataArgs = {}): Metadata {
  const metaPageTitle = pageTitle || DEFAULT_PAGE_TITLE;
  const metaDescription = pageDescription || DEFAULT_PAGE_DESCRIPTION;
  const metaPagePath = pagePath || "";
  const metaOgImage = ogImage || DEFAULT_OG_IMAGE;
  const metaTwitterImage = twitterImage || DEFAULT_TWITTER_IMAGE;

  return {
    title: metaPageTitle,
    description: metaDescription,
    openGraph: {
      title: metaPageTitle,
      description: metaDescription,
      url: urlJoin(BASE_URL, metaPagePath),
      siteName: DEFAULT_PAGE_TITLE,
      type, // "website" or "article"
      locale: "en_US",
      ...(type === "article" && {
        authors: authors,
      }),
      ...(metaOgImage && {
        images: [
          {
            url: urlJoin(BASE_URL, metaOgImage),
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: metaPageTitle,
      description: metaDescription,
      ...(metaTwitterImage && {
        images: [urlJoin(BASE_URL, metaTwitterImage)],
      }),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
