import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NotebookPen } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPostCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  summary: string;
  date: string;
  image?: string;
  keywords: string[];
  href: string;
}

function BlogPostCard({ className, title, summary, date, image, keywords, href }: BlogPostCardProps) {
  return (
    <Link href={href} prefetch={false}>
      <Card className={cn("w-full flex flex-col sm:flex-row gap-4 p-4 group hover-effect transition-all", className)}>
        <CardHeader className="relative h-auto sm:h-32 w-full sm:w-60 aspect-video bg-photo-background border border-border rounded-sm overflow-clip flex items-center justify-center">
          {image
            ? <Image
              src={image}
              alt={title}
              fill
              className="object-cover text-sm scale-100 group-hover:scale-105 transition-all"
            />
            // Image fallback
            : <NotebookPen
              className="text-muted-foreground size-20 scale-90 group-hover:scale-95 transition-all"
              role="img"
              aria-label={title}
            />
          }
        </CardHeader>

        <CardContainer className="flex flex-col gap-1">
          <CardTitle asChild className="text-sm text-wrap sm:line-clamp-1">
            <p>{title}</p>
          </CardTitle>

          <CardDescription asChild className="text-xs sm:text-sm font-semibold -pt-0.5">
            <p>{date}</p>
          </CardDescription>

          <CardDescription asChild className="text-xs sm:text-sm pt-1 sm:line-clamp-2">
            <p>{summary}</p>
          </CardDescription>

          <CardContent asChild>
            {keywords &&
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
                  <Badge key={index} variant={"outline"} className="badge">
                    {keyword}
                  </Badge>
                ))}
              </div>
            }
          </CardContent>
        </CardContainer>
      </Card>
    </Link>
  );
}

export { BlogPostCard };
