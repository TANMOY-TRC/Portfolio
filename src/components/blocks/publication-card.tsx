"use client"

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, FileText, Github, Gitlab, SquareCode, X } from "lucide-react";

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

interface PublicationCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  bookTitle: string;
  publisher?: string;
  doi?: string;
  authors: string;
  date: string;
  keywords?: string[];
  pdf?: string;
  sourceCode?: {
    github?: string;
    gitlab?: string;
  };
}

function PublicationCard({ className, title, bookTitle, publisher, doi, authors, date, keywords, pdf, sourceCode }: PublicationCardProps) {
  const [sourceVisibility, setSourceVisibility] = useState<boolean>(false);

  return (
    <Card className={cn("p-4 pt-3 gap-3 hover-effect transition-all", className)}>
      <CardContainer className="flex flex-row gap-5 justify-between">
        <CardContainer className="flex flex-col gap-1">
          <CardHeader asChild className="text-sm sm:text-base">
            <CardTitle asChild>
              <p>{title}</p>
            </CardTitle>
          </CardHeader>

          <CardContent asChild className="text-xs sm:text-sm">
            <CardDescription>
              <p className="font-medium pb-1 md:hidden">{date}</p>
              <p>{authors}</p>
              <p>{bookTitle}{publisher && " • " + publisher}</p>
              {doi && <p>DOI: {doi}</p>}
            </CardDescription>
          </CardContent>

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

        <CardDescription asChild className="text-base font-medium whitespace-nowrap hidden md:flex">
          <p>{date}</p>
        </CardDescription>
      </CardContainer>

      {(doi || pdf || sourceCode) && <>
        <hr className="rounded-full my-2" />

        <CardFooter className="flex flex-col sm:flex-row gap-2">
          <div className="flex flex-row flex-wrap gap-2 w-full sm:w-fit">
            {doi && <Button asChild variant={"tab"} size={"sm"} className="button hover-effect transition-all" aria-label="Publication Link">
              <Link href={`https://dx.doi.org/${doi}`} target="_blank" rel="noopener noreferrer" prefetch={false}>
                <ExternalLink />
              </Link>
            </Button>}

            {pdf && <Button asChild variant={"tab"} size={"sm"} className="button hover-effect transition-all" aria-label="Download PDF">
              <Link href={pdf} target="_blank" rel="noopener noreferrer" prefetch={false}>
                <FileText />
                PDF
              </Link>
            </Button>}

            {sourceCode && <Button variant={"tab"} size={"sm"} className="cursor-pointer button grow sm:flex-none hover-effect transition-all" onClick={() => setSourceVisibility(!sourceVisibility)} aria-label="View/Hide Source">
              {sourceVisibility ? <X /> : <SquareCode />}
              {sourceVisibility ? "Hide Links" : "Source Code"}
            </Button>}
          </div>

          {sourceVisibility && <div className="flex flex-row flex-wrap gap-2 w-full sm:w-fit">
            {sourceCode?.github && <Button asChild variant={"tab"} size={"sm"} className={`button grow sm:flex-none hover-effect transition-all ${!sourceVisibility && "hidden"}`} aria-label="GitHub">
              <Link href={sourceCode.github} target="_blank" rel="noopener noreferrer" prefetch={false}>
                <Github />
                GitHub
              </Link>
            </Button>}

            {sourceCode?.gitlab && <Button asChild variant={"tab"} size={"sm"} className={`button grow sm:flex-none hover-effect transition-all ${!sourceVisibility && "hidden"}`} aria-label="GitLab">
              <Link href={sourceCode.gitlab} target="_blank" rel="noopener noreferrer" prefetch={false}>
                <Gitlab />
                GitLab
              </Link>
            </Button>}
          </div>}
        </CardFooter>
      </>}
    </Card>
  );
}

export { PublicationCard };
