"use client"

import { useRouter, useSearchParams } from "next/navigation";

import { formatDate, getBlogSearchUrl, getBlogUrl } from "@/app/blog/utils";

import { Button } from "@/components/ui/button";
import { BlogPostCard } from "@/components/blocks/blog-post-card";

import type { BlogPost } from "@/types/blog-post";

import { sitemap } from "@/config";

interface BlogListProps {
  posts: BlogPost[];
  keywords: string[];
}

export default function BlogList({ posts, keywords }: BlogListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = decodeURIComponent(searchParams.get("search") || "");

  const filteredPosts = posts.filter(post => {
    const query = searchQuery.toLowerCase();
    return (
      post.metadata.title.toLowerCase().includes(query) ||
      post.metadata.keywords.some(k => k.toLowerCase().includes(query))
    );
  });

  const matchKeyword = (keyword: string) => searchQuery.toLowerCase() === keyword.toLowerCase();

  const updateSearchParam = (url: string, scroll = false) => {
    router.replace(url, { scroll });
  };

  return (
    <>
      {/* Keywords */}
      <div className="flex flex-row flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-5 sm:mb-6 md:mb-7">
        <Button
          variant={"tab"}
          size={"sm"}
          className={`button cursor-pointer text-muted-foreground ${matchKeyword("") ? "button-active" : ""}`}
          onClick={() => updateSearchParam(sitemap.blog.path)}
        >
          All
        </Button>

        {keywords.map((keyword, index) => (
          <Button
            key={index}
            variant={"tab"}
            size={"sm"}
            className={`button cursor-pointer text-muted-foreground ${matchKeyword(keyword) ? "button-active" : ""}`}
            onClick={() => updateSearchParam(getBlogSearchUrl(keyword))}
          >
            {keyword}
          </Button>
        ))}
      </div>

      {/* Blog List */}
      <div className="flex flex-col gap-5">
        {
          filteredPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.metadata.title}
              summary={post.metadata.summary}
              date={formatDate(post.metadata.date)}
              image={post.metadata.image}
              keywords={post.metadata.keywords}
              href={getBlogUrl(post.slug)}
            />
          ))
        }
      </div>
    </>
  );
}
