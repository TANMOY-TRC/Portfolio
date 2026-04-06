import Link from "next/link";
import { Metadata } from "next/types";

import { DEFAULT_PAGE_TITLE, getMetadata, sitemap } from "@/config";

import { PageContainer, FlexContainer, SidePanel, SectionContainer, Section, TopSpacer, BottomSpacer } from "@/components/shared/layout";
import { SectionNavigation } from "@/components/blocks/section-navigation";
import { SectionHeader } from "@/components/blocks/section-header";
import { PublicationCard } from "@/components/blocks/publication-card";
import { Button } from "@/components/ui/button";

import type { Sections } from "@/types/sections";
import { researchInterest } from "@/data/research-interest";
import { publications } from "@/data/publications";
import { researchSocials } from "@/data/socials";

export const metadata: Metadata = getMetadata({
  pageTitle: `${DEFAULT_PAGE_TITLE} | ${sitemap.research.label}`,
  pageDescription: sitemap.research.description,
  pagePath: sitemap.research.path
});

export default function Research() {
  const sections = {
    researchInterest: { id: "research-interest", label: "Research Interest" },
    publication: { id: "publication", label: "Publication" }
  } satisfies Sections;

  return (
    <>
      <PageContainer>
        <TopSpacer />

        <FlexContainer>
          {/* Section Navigation */}
          <SidePanel>
            <SectionNavigation
              sections={Object.values(sections)}
              scrollMarginTop={140}    // Equivalent to h-35
              className="hidden md:block"
            />
          </SidePanel>

          <SectionContainer>
            {/* Research Interest Section */}
            <Section id={sections.researchInterest.id}>
              <SectionHeader title="RESEARCH INTEREST" className="mb-5 sm:mb-6 md:mb-7" />
              <p className="text-balance text-sm sm:text-base">
                {researchInterest}
              </p>

              {/* Research Socials */}
              <div className="mt-5 flex flex-row gap-2 self-center">
                {researchSocials.map((social, index) => (
                  <Button asChild key={index} variant={"tab"} size={"sm"} className="button hover-effect" aria-label={social.title}>
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" prefetch={false}>
                      {social.icon}
                      {social.title}
                    </Link>
                  </Button>
                ))}
              </div>
            </Section>

            {/* Publication Section */}
            <Section id={sections.publication.id}>
              <SectionHeader title="PUBLICATION" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="flex flex-col gap-5">
                {publications.map((publication, index) => (
                  <PublicationCard key={index} {...publication} />
                ))}
              </div>
            </Section>
          </SectionContainer>
        </FlexContainer>

        <BottomSpacer />
      </PageContainer>
    </>
  );
}
