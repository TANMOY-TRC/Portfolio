import Link from "next/link";
import { TbArrowBackUp, TbFaceIdError } from "react-icons/tb";

import { PageContainer } from "@/components/shared/layout";
import { Button } from "@/components/ui/button";
import { sitemap } from "@/config";

export default function NotFound() {
  return (
    <>
      <PageContainer className="flex flex-col gap-3 justify-center items-center sm:pt-14">
        <TbFaceIdError className="size-24 sm:size-28 md:size-32 text-muted-foreground" />
        <p className="text-muted-foreground font-semibold text-xl sm:text-2xl md:text-3xl mb-5">Page Not Found!</p>
        <Button asChild variant={"tab"} size={"sm"} className="button hover-effect" aria-label="Return Home">
          <Link href={sitemap.home.path} prefetch={false}>
            <TbArrowBackUp />
            Return Home
          </Link>
        </Button>
      </PageContainer>
    </>
  );
}
