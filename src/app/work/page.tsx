import { Metadata } from "next/types";

import { DEFAULT_PAGE_TITLE, getMetadata, sitemap } from "@/config";

import { PageContainer, FlexContainer, SidePanel, SectionContainer, Section, TopSpacer, BottomSpacer } from "@/components/shared/layout";
import { SectionNavigation } from "@/components/blocks/section-navigation";
import { SectionHeader } from "@/components/blocks/section-header";
import { TechStackCard } from "@/components/blocks/tech-stack-card";
import { ProjectCard } from "@/components/blocks/project-card";

import type { Sections } from "@/types/sections";
import { technologyStack } from "@/data/technology-stack";
import { projects } from "@/data/projects";

export const metadata: Metadata = getMetadata({
  pageTitle: `${DEFAULT_PAGE_TITLE} | ${sitemap.work.label}`,
  pageDescription: sitemap.work.description,
  pagePath: sitemap.work.path
});

export default function Work() {
  const sections = {
    technologyStack: { id: "technology-stack", label: "Technology Stack" },
    project: { id: "project", label: "Project" }
  } satisfies Sections;

  return (
    <>
      <PageContainer>
        <TopSpacer />

        <FlexContainer>
          <SidePanel>
            <SectionNavigation
              sections={Object.values(sections)}
              scrollMarginTop={140}    // Equivalent to h-35
              className="hidden md:block"
            />
          </SidePanel>

          <SectionContainer>
            {/* Tech Stack */}
            <Section id={sections.technologyStack.id}>
              <SectionHeader title="TECHNOLOGY STACK" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {technologyStack.map((stack, index) => (
                  <TechStackCard key={index} {...stack} />
                ))}
              </div>
            </Section>

            {/* Project */}
            <Section id={sections.project.id}>
              <SectionHeader title="PROJECT" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="flex flex-col gap-5">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
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
