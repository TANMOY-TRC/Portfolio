import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { DEFAULT_PAGE_TITLE, getMetadata } from "@/config";
import { getPublishedBlogPosts } from "@/lib/blog-utils";
import { urlJoin } from "@/lib/url-utils";
import { formatDate, getBlogSearchUrl } from "@/app/blog/utils";

import { PageContainer, FlexContainer, SidePanel, SectionContainer, Section, TopSpacer, BottomSpacer } from "@/components/shared/layout";
import { CustomMDX } from "@/components/mdx/custom-mdx";
import { getTOC } from "@/components/mdx/utils";
import { MDXTableOfContent } from "@/components/mdx/table-of-content";
import { Badge } from "@/components/ui/badge";

import type { BlogPost } from "@/types/blog-post";
import { profile } from "@/data/profile";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  const posts: BlogPost[] = getPublishedBlogPosts();

  return posts.map((post: BlogPost) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = getPublishedBlogPosts().find((post: BlogPost) => post.slug === slug);

  if (!post) return;

  const { title, summary, image } = post.metadata;

  return getMetadata({
    pageTitle: `${DEFAULT_PAGE_TITLE} | ${title}`,
    pageDescription: summary,
    pagePath: urlJoin("blogs", post.slug),
    ...(image && {
      ogImage: image,
      twitterImage: image
    }),
    type: "article",
    authors: [profile.name]
  });
}

export default async function Blog({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPublishedBlogPosts().find((post: BlogPost) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  const mdxContent = post.content;
  const mdxTOC = getTOC(mdxContent);

  return (
    <>
      <PageContainer>
        <TopSpacer />

        <FlexContainer>
          <SectionContainer>
            <Section>
              {post.metadata.keywords &&
                <div className="flex flex-row gap-2 mb-4">
                  {post.metadata.keywords.map((keyword, index) => (
                    <Badge asChild key={index} variant={"outline"} className="keyword">
                      <Link href={getBlogSearchUrl(keyword)} prefetch={false}>
                        {keyword}
                      </Link>
                    </Badge>
                  ))}
                </div>
              }

              <h1 className="title font-semibold text-2xl sm:text-3xl">
                {post.metadata.title}
              </h1>

              <p className="my-2 text-sm sm:text-base text-muted-foreground">
                {post.metadata.summary}
              </p>

              <p className="mt-3 mb-8 text-xs sm:text-sm font-medium text-muted-foreground">
                {formatDate(post.metadata.date)}
              </p>

              {post.metadata.image &&
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  width={700}
                  height={390}
                  priority
                  className="text-xs rounded-md border border-border bg-photo-background w-full h-auto"
                />
              }

              <article className="prose">
                <CustomMDX source={mdxContent} />
              </article>
            </Section>
          </SectionContainer>

          <SidePanel className="hidden md:block">
            <MDXTableOfContent mdxTOC={mdxTOC} scrollMarginTop={80} className="mt-20" />
          </SidePanel>
        </FlexContainer>

        <BottomSpacer />
      </PageContainer>
    </>
  );
}
