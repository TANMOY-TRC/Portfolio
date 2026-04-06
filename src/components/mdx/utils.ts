import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

export type TOCItem = {
  text: string;
  id: string;
  level: number;
};

export function getTOC(mdxContent: string): TOCItem[] {
  const toc: TOCItem[] = [];

  unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .parse(mdxContent)
    .children.forEach(node => {
      // Only headings
      if (node.type === "heading") {
        // @ts-ignore
        const text = node.children.map((child: any) => child.value || "").join("");
        // Generate an ID like rehype-slug
        const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
        toc.push({
          text,
          id,
          level: node.depth,
        });
      }
    });

  return toc;
}
