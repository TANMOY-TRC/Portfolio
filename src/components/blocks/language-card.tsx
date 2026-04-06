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
import { Button } from "@/components/ui/button";
import { IconSlot } from "@/components/ui/icon-slot";

interface LanguageCardProps extends React.HTMLAttributes<HTMLElement> {
  icon: React.ReactElement;
  language: string;
  level: string;
  skills: string;
  usage?: string;
}

function LanguageCard({ icon, language, level, skills, usage, className }: LanguageCardProps) {
  return (
    <Card className={cn("rounded-md p-4 hover-effect transition-all", className)}>
      <CardContainer className="flex flex-col gap-4">
        <CardHeader className="flex gap-3 items-center">
          <Button variant={"tab"} size={"sm"} className="button has-[>svg]:px-2 aspect-square" inert>
            <IconSlot className="size-4 sm:size-4.5 text-primary">{icon}</IconSlot>
          </Button>

          <CardTitle asChild className="text-sm sm:text-base">
            <p>{language}</p>
          </CardTitle>
        </CardHeader>

        <CardContent asChild className="text-xs sm:text-sm">
          <CardDescription className="flex flex-col gap-0.5 sm:gap-1">
            <p className="font-semibold">{level}</p>
            <p className="font-medium">{skills}</p>
            {usage && <p>{usage}</p>}
          </CardDescription>
        </CardContent>
      </CardContainer>
    </Card>
  );
}

export { LanguageCard };
