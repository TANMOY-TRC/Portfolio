import type { MetadataRoute } from "next";

import { BASE_URL } from "@/config";
import { urlJoin } from "@/lib/url-utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: urlJoin(BASE_URL, "sitemap.xml"),
  };
}
