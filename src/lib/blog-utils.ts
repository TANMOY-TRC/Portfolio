import fs from "fs";
import path from "path";

import { BLOG_PATH } from "@/config";

import type { BlogMetadata, BlogPost } from "@/types/blog-post";

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error("No frontmatter found");
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<BlogMetadata> = {};

  frontMatterLines.forEach((line) => {
    if (!line.includes(":")) {
      return;
    }

    const [key, ...valueArr] = line.split(":");
    const value = valueArr.join(":").trim();

    switch (key.trim()) {
      case "keywords":
        // Match array format: ["tag1", "tag2"]
        const arrayMatch = value.match(/\[(.*)\]/);
        if (arrayMatch) {
          metadata.keywords = arrayMatch[1].split(",").map(item => item.trim().replace(/^['"](.*)['"]$/, "$1"));
        } else {
          metadata.keywords = [];
        }
        break;
      case "published":
        metadata.published = value.replace(/^['"](.*)['"]$/, "$1").toLowerCase() === "true";
        break;
      case "image":
        metadata.image = value.replace(/^['"](.*)['"]$/, "$1") || undefined;
        break;
      default:
        metadata[key.trim() as keyof Omit<BlogMetadata, "keywords" | "published" | "image">] = value.replace(/^['"](.*)['"]$/, "$1");
    }
  });

  // Ensure required fields exist
  if (!metadata.title || !metadata.summary || !metadata.date || metadata.published === undefined)
    throw new Error("Missing required frontmatter fields");

  return { metadata: metadata as BlogMetadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    } satisfies BlogPost;
  })
}

export function getBlogPosts() {
  const posts = getMDXData(path.resolve(BLOG_PATH));

  // Sort by date descending, then by title ascending
  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date).getTime();
    const dateB = new Date(b.metadata.date).getTime();

    if (dateB !== dateA) {
      return dateB - dateA; // newest first
    }

    // If dates are equal, sort by title alphabetically
    return a.metadata.title.localeCompare(b.metadata.title);
  });
}

export function getPublishedBlogPosts() {
  return getBlogPosts().filter(post => post.metadata.published);
}

export function getAllKeywordsSorted() {
  const posts = getPublishedBlogPosts();

  const allKeywords = posts.flatMap(post => post.metadata.keywords || []);

  // Deduplicate and sort ascending
  const uniqueSortedKeywords = Array.from(new Set(allKeywords)).sort((a, b) =>
    a.localeCompare(b)
  );

  return uniqueSortedKeywords;
}
