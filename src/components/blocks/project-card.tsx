"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Gitlab } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  image: string;
  description: string;
  keywords?: string[];
  duration: string;
  link?: string;
  sourceCode?: {
    github?: string;
    gitlab?: string;
  };
}

function ProjectCard({ className, title, image, description, keywords = [], duration, link, sourceCode }: ProjectCardProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Card
      className={cn("flex flex-col sm:flex-row md:flex-col [@media(min-width:880px)]:flex-row gap-4 p-4 group hover-effect transition-all", className)}
    >
      <CardHeader className="w-full sm:w-auto md:w-full sm:h-64 aspect-5/3 sm:aspect-square md:aspect-auto [@media(min-width:880px)]:aspect-square relative bg-photo-background border border-border rounded-sm overflow-clip self-center">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain text-sm scale-90 group-hover:scale-95 transition-all"
        />
      </CardHeader>

      <CardContainer className="flex flex-col gap-3">
        <CardContent className="flex flex-col gap-2">
          <CardTitle className="text-sm sm:text-base sm:line-clamp-1">
            <p>{title}</p>
          </CardTitle>

          <CardDescription asChild className="text-xs sm:text-sm flex flex-col gap-2">
            <p className="font-medium">{duration}</p>
          </CardDescription>

          {/* Project Description */}
          <CardDescription className="flex flex-col gap-2">
            <p
              onClick={() => setExpanded(!expanded)}
              className={cn("text-muted-foreground text-xs sm:text-sm cursor-pointer", expanded ? "" : "line-clamp-3")}
            >
              {description}
            </p>

            <Badge asChild variant={"outline"} className="text-muted-foreground self-center rounded-full cursor-pointer font-normal md:hover:font-semibold transition-all">
              <button
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? "See less" : "See more"}
              </button>
            </Badge>
          </CardDescription>

          <CardContent asChild>
            {keywords &&
              <div className="flex flex-wrap gap-2 mt-1">
                {keywords.map((keyword, index) => (
                  <Badge key={index} variant={"outline"} className="badge">
                    {keyword}
                  </Badge>
                ))}
              </div>
            }
          </CardContent>
        </CardContent>

        {(link || sourceCode) && <>
          <hr className="rounded-full my-2" />

          <CardFooter className="flex flex-row flex-wrap gap-2 w-full sm:w-fit">
            {link && <Button asChild variant={"tab"} size={"sm"} className="button hover-effect transition-all" aria-label="External Link">
              <Link href={link} target="_blank" rel="noopener noreferrer" prefetch={false}>
                <ExternalLink />
              </Link>
            </Button>}

            {sourceCode?.github && <Button asChild variant={"tab"} size={"sm"} className={"button grow sm:flex-none hover-effect transition-all"} aria-label="GitHub">
              <Link href={sourceCode.github} target="_blank" rel="noopener noreferrer" prefetch={false}>
                <Github />
                GitHub
              </Link>
            </Button>}

            {sourceCode?.gitlab && <Button asChild variant={"tab"} size={"sm"} className={"button grow sm:flex-none hover-effect transition-all"} aria-label="GitLab">
              <Link href={sourceCode.gitlab} target="_blank" rel="noopener noreferrer" prefetch={false}>
                <Gitlab />
                GitLab
              </Link>
            </Button>}
          </CardFooter>
        </>}
      </CardContainer>
    </Card>
  );
}

export { ProjectCard };
