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

interface CertificationCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  category?: string;
  provider: string;
  date: string;
  href?: string;
}

function CertificationCard({ className, title, category, provider, date, href }: CertificationCardProps) {
  const cardContent = (
    <Card className={cn("flex flex-col sm:flex-row gap-2 sm:gap-5 justify-between px-4 py-3 hover-effect transition-all", className)}>
      <CardContainer className="flex flex-col gap-0.5">
        <CardHeader asChild className="text-sm sm:text-base">
          <CardTitle asChild>
            <p><span>{title}</span> {category && <span>{category}</span>}</p>
          </CardTitle>
        </CardHeader>

        <CardContent asChild className="text-xs sm:text-sm">
          <CardDescription asChild>
            <p>{provider}</p>
          </CardDescription>
        </CardContent>
      </CardContainer>

      <CardDescription asChild className="text-xs sm:text-base sm:font-medium whitespace-nowrap">
        <p>{date}</p>
      </CardDescription>
    </Card>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer" prefetch={false}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}

export { CertificationCard };
