import React from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

interface EducationCardProps extends React.HTMLAttributes<HTMLElement> {
  degree: string;
  institute: string;
  location: string;
  duration: string;
  highlightDegree?: boolean;
}

function EducationCard({ className, degree, institute, location, duration, highlightDegree = false }: EducationCardProps) {
  return (
    <Card className={cn("flex flex-col sm:flex-row gap-1 sm:gap-5 justify-between px-4 py-3 hover-effect transition-all", className)}>
      <CardContainer className="flex flex-col gap-1">
        <CardHeader asChild className="text-sm sm:text-base">
          <CardTitle asChild>
            <p>{highlightDegree ? degree : institute}</p>
          </CardTitle>
        </CardHeader>

        <CardContent asChild className="text-xs sm:text-sm">
          <CardDescription>
            <p className="font-semibold">{highlightDegree ? institute : degree}</p>
            {highlightDegree && <p>{location}</p>}
          </CardDescription>
        </CardContent>
      </CardContainer>

      <CardContainer asChild>
        <CardDescription asChild className="text-xs sm:text-base sm:font-medium whitespace-nowrap">
          <p>{duration}</p>
        </CardDescription>
      </CardContainer>
    </Card>
  );
}

export { EducationCard };
