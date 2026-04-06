import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkGithubAlerts from "remark-github-blockquote-alert";

import rehypeFormat from "rehype-format";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import "remark-github-blockquote-alert/alert.css";

// -------- Types --------
type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

// -------- Components --------
export const CustomLink: React.FC<CustomLinkProps> = ({ href, children, ...props }) => {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} prefetch={false}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a href={href} {...props}>{children}</a>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export const RoundedImage: React.FC<ImageProps> = ({ ...props }) => (
  <Image
    width={700}
    height={390}
    className="text-xs rounded-md border border-border bg-photo-background w-full h-auto"
    {...props}
  />
);

// -------- MDX Components mapping --------
const components = {
  img: RoundedImage,
  a: CustomLink
};

export type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

// -------- MDX Wrapper Component --------
export const CustomMDX: React.FC<CustomMDXProps> = (props) => {
  return <MDXRemote
    {...props}
    components={{ ...components, ...(props.components || {}) }}
    options={{
      mdxOptions: {
        remarkPlugins: [
          remarkGfm,
          remarkMath,
          remarkDirective,
          remarkFrontmatter,
          remarkGithubAlerts
        ],
        rehypePlugins: [
          rehypeFormat,
          [rehypeRaw, {
            passThrough: ["mdxJsxFlowElement", "mdxJsxTextElement"]
          }],
          rehypeSlug,
          [rehypePrettyCode, {
            theme: { dark: "github-dark-default", light: "github-light" },
            keepBackground: false,
          }],
          [rehypeAutolinkHeadings, {
            behavior: "prepend",properties: { className: ["heading-link"] }
          }]
        ]
      }
    }}
  />
};
