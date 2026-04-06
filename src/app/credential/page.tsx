import { Metadata } from "next/types";

import { DEFAULT_PAGE_TITLE, getMetadata, sitemap } from "@/config";

import { PageContainer, FlexContainer, SidePanel, SectionContainer, Section, TopSpacer, BottomSpacer } from "@/components/shared/layout";
import { SectionNavigation } from "@/components/blocks/section-navigation";
import { SectionHeader } from "@/components/blocks/section-header";
import { CredentialBadgeCard } from "@/components/blocks/credential-badge-card";
import { CertificationCard } from "@/components/blocks/certification-card";
import { AwardCard } from "@/components/blocks/award-card";

import type { Sections } from "@/types/sections";
import { badges } from "@/data/badges";
import { certifications } from "@/data/certifications";
import { trainingAssessments } from "@/data/training-assessments";
import { awards } from "@/data/awards";

export const metadata: Metadata = getMetadata({
  pageTitle: `${DEFAULT_PAGE_TITLE} | ${sitemap.credential.label}`,
  pageDescription: sitemap.credential.description,
  pagePath: sitemap.credential.path
});

export default function Credential() {
  const sections = {
    badge: { id: "badge", label: "Badge" },
    certification: { id: "certification", label: "Certification" },
    trainingAssessment: { id: "training-assessment", label: "Training & Assessment" },
    award: { id: "award", label: "Award & Honour" }
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
            {/* Badge */}
            <Section id={sections.badge.id}>
              <SectionHeader title="BADGE" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="flex flex-wrap gap-5 justify-start">
                {badges.map((badge, index) => (
                  <CredentialBadgeCard key={index} {...badge} />
                ))}
              </div>
            </Section>

            {/* Certification */}
            <Section id={sections.certification.id}>
              <SectionHeader title="CERTIFICATION" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="flex flex-col gap-5">
                {certifications.map((certificate, index) => (
                  <CertificationCard key={index} {...certificate} />
                ))}
              </div>
            </Section>

            {/* Training and Assessment */}
            <Section id={sections.trainingAssessment.id}>
              <SectionHeader title="TRAINING AND ASSESSMENT" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="flex flex-col gap-5">
                {trainingAssessments.map((training, index) => (
                  <CertificationCard key={index} {...training} />
                ))}
              </div>
            </Section>

            {/* Award & Honour */}
            <Section id={sections.award.id}>
              <SectionHeader title="AWARD AND HONOUR" className="mb-5 sm:mb-6 md:mb-7" />
              <div className="flex flex-col gap-5">
                {awards.map((award, index) => (
                  <AwardCard key={index} {...award} />
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
