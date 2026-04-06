import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface AwardCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  provider?: string;
  description: React.ReactNode;
  duration: string;
  href?: string;
}

function AwardCard({ className, title, provider, description, duration, href }: AwardCardProps) {
  const awardContent = (
    <Card className={cn("flex flex-col sm:flex-row gap-2 sm:gap-5 justify-between px-4 py-3 hover-effect transition-all", className)}>
      <CardContainer className="flex flex-col gap-0.5">
        <CardHeader asChild className="text-sm sm:text-base">
          <CardTitle asChild>
            <p>{title}{provider ? <span className="text-muted-foreground"> - {provider}</span> : ""}</p>
          </CardTitle>
        </CardHeader>

        <CardContent asChild className="text-xs sm:text-sm">
          <CardDescription asChild>
            <p>{description}</p>
          </CardDescription>
        </CardContent>
      </CardContainer>

      <CardDescription asChild className="text-xs sm:text-base sm:font-medium whitespace-nowrap">
        <p>{duration}</p>
      </CardDescription>
    </Card>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer" prefetch={false}>
      {awardContent}
    </Link>
  ) : (
    awardContent
  );
}

export { AwardCard };
