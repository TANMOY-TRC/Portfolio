import React from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContainer,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconSlot } from "@/components/ui/icon-slot";

interface TechStackCardProps extends React.HTMLAttributes<HTMLElement> {
  icon: React.ReactElement;
  title: string;
  items: string[];
}

function TechStackCard({ icon, title, items, className }: TechStackCardProps) {
  return (
    <Card className={cn("rounded-md p-4 hover-effect transition-all", className)}>
      <CardContainer className="flex flex-col gap-5">
        <CardHeader className="flex gap-3 items-center">
          <Button variant={"tab"} size={"sm"} className="button has-[>svg]:px-2 aspect-square" inert>
            <IconSlot className="size-4 sm:size-4.5 text-primary">{icon}</IconSlot>
          </Button>

          <CardTitle asChild className="text-sm sm:text-base">
            <p>{title}</p>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <Badge
              key={index}
              variant={"outline"}
              className="badge"
            >
              {item}
            </Badge>
          ))}
        </CardContent>
      </CardContainer>
    </Card>
  );
}

export { TechStackCard };
