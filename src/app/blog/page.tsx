import { Metadata } from "next/types";
import { Suspense } from "react";

import { DEFAULT_PAGE_TITLE, getMetadata, sitemap } from "@/config";
import { getAllKeywordsSorted, getPublishedBlogPosts } from "@/lib/blog-utils";

import { PageContainer, SectionContainer, Section, TopSpacer, BottomSpacer } from "@/components/shared/layout";
import { SectionHeader } from "@/components/blocks/section-header";
import StayTuned from "@/components/shared/stay-tuned";
import BlogList from "@/app/blog/blog-list";

import type { BlogPost } from "@/types/blog-post";

export const metadata: Metadata = getMetadata({
  pageTitle: `${DEFAULT_PAGE_TITLE} | ${sitemap.blog.label}`,
  pageDescription: sitemap.blog.description,
  pagePath: sitemap.blog.path
});

export default function Blog() {
  const posts: BlogPost[] = getPublishedBlogPosts();
  const keywords: string[] = getAllKeywordsSorted();

  if (posts.length === 0) {
    return <StayTuned />;
  }

  return (
    <>
      <PageContainer>
        <TopSpacer />

        <SectionContainer>
          {/* Blog */}
          <Section id={"blog"}>
            <SectionHeader title="BLOG" className="mb-3 sm:mb-4 md:mb-5" />
            <p className="text-muted-foreground font-semibold text-lg sm:text-xl md:text-2xl mb-5 sm:mb-6 md:mb-7">
              Insights, stories and reflections
            </p>

            <Suspense>
              <BlogList posts={posts} keywords={keywords} />
            </Suspense>
          </Section>
        </SectionContainer>

        <BottomSpacer />
      </PageContainer>
    </>
  );
}
