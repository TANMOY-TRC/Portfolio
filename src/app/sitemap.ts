import { MetadataRoute } from "next";

import { BASE_URL, sitemap as sitemapConfig } from "@/config";

import { urlJoin } from "@/lib/url-utils";
import { getPublishedBlogPosts } from "@/lib/blog-utils";

import type { BlogPost } from "@/types/blog-post";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = Object.values(sitemapConfig).map(
    page => ({
      url: urlJoin(BASE_URL, page.path),
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: 'monthly',
      priority: page.path === '/' ? 1 : 0.8,
    }));

  // Dynamic blog posts
  const blogPosts: MetadataRoute.Sitemap = getPublishedBlogPosts().map(
    (post: BlogPost) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.metadata.date,
      changeFrequency: "weekly",
      priority: 0.6,
    })
  );

  // Merge all routes
  return [...staticRoutes, ...blogPosts];
}
