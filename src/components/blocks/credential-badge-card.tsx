import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface CredentialBadgeCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  issuer: string;
  date: string;
  image: string;
  href?: string;
}

function CredentialBadgeCard({ className, title, issuer, date, image, href }: CredentialBadgeCardProps) {
  const cardContent = (
    <Card className={cn("w-full sm:w-40 flex flex-row sm:flex-col gap-4 p-2 sm:p-3 hover-effect transition-all", className)}>
      <CardHeader className="relative w-21 h-21 sm:w-34 sm:h-34 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain text-xs"
        />
      </CardHeader>

      <CardContent className="self-center">
        <CardTitle asChild className="text-sm text-wrap line-clamp-2">
          <p>{title}</p>
        </CardTitle>

        <CardDescription asChild className="text-xs pt-0.5">
          <p>{issuer}</p>
        </CardDescription>

        <CardDescription asChild className="text-xs pt-2">
          <p>{date}</p>
        </CardDescription>
      </CardContent>
    </Card>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer" prefetch={false} className="w-full sm:w-40">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}

export { CredentialBadgeCard };
