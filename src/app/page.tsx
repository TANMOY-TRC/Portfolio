import Link from "next/link";
import { FileUser } from "lucide-react";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { PageContainer, Section, SectionContainer } from "@/components/shared/layout";
import { TerminalChevron, TerminalUnderline } from "@/components/icons";
import { TypeAnimation } from "@/components/ui/type-animation";
import { Button } from "@/components/ui/button";

import { profile } from "@/data/profile";
import { homeSocials } from "@/data/socials";

export default function Home() {
  return (
    <>
      <PageContainer>
        <SectionContainer>
          {/* Hero */}
          <Section id={"hero"} className="min-h-svh flex items-center py-30 sm:pt-40">
            <div className="flex flex-col gap-7 mb-5 sm:mb-0">
              {/* Animated Shiny Text Pill */}
              <div className="group w-fit border rounded-full bg-gray-100 dark:bg-gray-900 text-xs font-semibold transition-all ease-in pointer-events-none">
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
                  <span>{profile.badgeText}</span>
                </AnimatedShinyText>
              </div>

              {/* Name */}
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl bg-gradient bg-clip-text text-transparent">
                {profile.name.toUpperCase()}
              </h1>

              {/* Type Animation */}
              <p className="flex items-center">
                <TerminalChevron className="size-5.5 sm:size-6.5 md:size-8 text-primary stroke-3" />
                <TypeAnimation
                  sequence={profile.roles.flatMap(role => [role, 2000])}
                  speed={50}
                  repeat={Infinity}
                  cursor={false}
                  className="type font-semibold text-xl sm:text-2xl md:text-3xl"
                />
                <TerminalUnderline className="size-5.5 sm:size-6.5 md:size-8 text-primary stroke-3 blink" />

                {/* Prevents line height flickering */}
                <span className="type font-semibold text-xl sm:text-2xl md:text-3xl">&nbsp;</span>
              </p>

              {/* Short Description */}
              <div className="flex flex-col gap-5 sm:gap-6 md:gap-7">
                <p className="font-semibold text-xl sm:text-2xl md:text-3xl text-balance text-foreground/70">
                  {profile.tagline}
                </p>

                <p className="font-medium text-xl sm:text-2xl md:text-3xl text-balance text-foreground/60">
                  {profile.missionStatement}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-row gap-2 mt-1">
                <Button asChild variant={"tab"} size={"sm"} className="button hover-effect sm:hidden" aria-label="Download CV">
                  <Link href={profile.cv} target="_blank" rel="noopener noreferrer" prefetch={false}>
                    <FileUser />
                    Resume / CV
                  </Link>
                </Button>

                {/* Socials */}
                {homeSocials.map((social, index) => (
                  <Button asChild key={index} variant={"tab"} size={"sm"} className="button hover-effect has-[>svg]:px-2 aspect-square" aria-label={social.title}>
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" prefetch={false}>
                      {social.icon}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </Section>
        </SectionContainer>
      </PageContainer>
    </>
  );
}
