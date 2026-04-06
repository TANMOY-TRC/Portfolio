import React from "react";

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

interface ExperienceCardProps extends React.HTMLAttributes<HTMLElement> {
  position: string;
  company: string;
  location: string;
  duration: string;
  responsibilities?: string[];
  technologies?: string[];
}

function ExperienceCard({ className, position, company, location, duration, responsibilities, technologies }: ExperienceCardProps) {
  return (
    <Card className={cn("gap-2 p-4 pt-3 hover-effect transition-all", className)}>
      <CardContainer className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-between">
        <CardContainer className="flex flex-col gap-1">
          <CardHeader asChild className="text-sm sm:text-base">
            <CardTitle asChild>
              <p>{position}</p>
            </CardTitle>
          </CardHeader>

          <CardContent asChild className="text-xs sm:text-sm">
            <CardDescription>
              <p className="font-semibold">{company}</p>
              <p>{location}</p>
            </CardDescription>
          </CardContent>
        </CardContainer>

        <CardContainer asChild>
          <CardDescription asChild className="text-xs sm:text-base sm:font-medium whitespace-nowrap">
            <p>{duration}</p>
          </CardDescription>
        </CardContainer>
      </CardContainer>

      <CardContainer className="flex flex-col gap-2">
        <CardContent asChild className="text-xs sm:text-sm">
          <CardDescription asChild>
            {responsibilities &&
              <ul className="list-disc list-outside pl-3 marker:text-primary">
                {responsibilities.map((responsibility, index) => (
                  <li key={index}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            }
          </CardDescription>
        </CardContent>

        <CardContent asChild>
          {technologies &&
            <div className="flex flex-wrap gap-2 mt-1">
              {technologies.map((technology, index) => (
                <Badge key={index} variant={"outline"} className="badge">
                  {technology}
                </Badge>
              ))}
            </div>
          }
        </CardContent>
      </CardContainer>
    </Card>
  );
}

export { ExperienceCard };
