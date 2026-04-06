import Image from "next/image";
import { Metadata } from "next/types";

import { DEFAULT_PAGE_TITLE, getMetadata, sitemap } from "@/config";

import { PageContainer, FlexContainer, SidePanel, SectionContainer, Section, TopSpacer, BottomSpacer } from "@/components/shared/layout";
import { SectionNavigation } from "@/components/blocks/section-navigation";
import { SectionHeader } from "@/components/blocks/section-header";
import { ExperienceCard } from "@/components/blocks/experience-card";
import { EducationCard } from "@/components/blocks/education-card";
import { TechStackCard } from "@/components/blocks/tech-stack-card";
import { LanguageCard } from "@/components/blocks/language-card";

import type { Sections } from "@/types/sections";
import { experiences } from "@/data/experiences";
import { educations } from "@/data/educations";
import { technicalExpertise } from "@/data/technical-expertise";
import { languages } from "@/data/languages";
import { profile } from "@/data/profile";

export const metadata: Metadata = getMetadata({
  pageTitle: `${DEFAULT_PAGE_TITLE} | ${sitemap.about.label}`,
  pageDescription: sitemap.about.description,
  pagePath: sitemap.about.path
});

export default function About() {
  const sections = {
    profile: { id: "profile", label: "Profile" },
    experience: { id: "experience", label: "Experience" },
    education: { id: "education", label: "Education" },
    technicalExpertise: { id: "technical-expertise", label: "Technical Expertise" },
    languageProficiency: { id: "language-proficiency", label: "Language Proficiency" }
  } satisfies Sections;

  return (
    <>
      <PageContainer>
        <TopSpacer />

        <FlexContainer>
          <SidePanel>
            <Image
              src={profile.photo}
              alt="Profile Picture"
              width={200}    // Equivalent to w-50
              height={200}
              className="object-contain object-center rounded-full border photo bg-photo-background self-center mb-10 md:mb-0 text-center text-xs"
              priority
            />

            <SectionNavigation
              sections={Object.values(sections)}
              scrollMarginTop={140}    // Equivalent to h-35
              className="hidden md:block"
            />
          </SidePanel>

          <SectionContainer>
            {/* Profile */}
            <Section id={sections.profile.id} className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h1 className="font-bold text-4xl sm:text-4xl md:text-5xl sm:tracking-wider bg-gradient-2 bg-clip-text text-transparent">
                  {profile.name.toUpperCase()}
                </h1>
                <p className="text-muted-foreground font-semibold text-lg sm:text-1xl md:text-2xl">
                  {profile.activeRole}
                </p>
              </div>
              <p className="text-balance text-sm sm:text-base">
                {profile.bio}
              </p>
            </Section>

            {/* Experience */}
            <Section id={sections.experience.id}>
              <SectionHeader title="EXPERIENCE" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="flex flex-col gap-5">
                {experiences.map((experience, index) => (
                  <ExperienceCard key={index} {...experience} />
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section id={sections.education.id}>
              <SectionHeader title="EDUCATION" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="flex flex-col gap-5">
                {educations.map((education, index) => (
                  <EducationCard key={index} {...education} highlightDegree />
                ))}
              </div>
            </Section>

            {/* Technical Expertise */}
            <Section id={sections.technicalExpertise.id}>
              <SectionHeader title="TECHNICAL EXPERTISE" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {technicalExpertise.map((expertise, index) => (
                  <TechStackCard key={index} {...expertise} />
                ))}
              </div>
            </Section>

            {/* Language Proficiency */}
            <Section id={sections.languageProficiency.id}>
              <SectionHeader title="LANGUAGE PROFICIENCY" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {languages.map((language, index) => (
                  <LanguageCard key={index} {...language} />
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
