import Link from "next/link";
import { Terminal, FileUser } from "lucide-react";

import { NavBar } from "@/components/layout/nav-bar";
import { TextLogo } from "@/components/blocks/text-logo";
import { LetterFx } from "@/components/ui/letter-fx";
import { FadeMask } from "@/components/ui/fade-mask";

import { profile } from "@/data/profile";

function Header() {
  return (
    <>
      <NavBar />

      {/* Text Animation Logo */}
      <div className="fixed z-10 top-0 sm:top-5 flex sm:left-5 w-full sm:w-40 p-2 pb-5 sm:p-0">
        <FadeMask direction={"bottom"} className="bg-background backdrop-blur-lg sm:hidden" />
        <TextLogo className="bg-card/80 animation">
          <Terminal className="size-5 sm:size-4.5 text-primary stroke-3" />
          <LetterFx
            speed={{
              BASE_DELAY: 70,
              REVEAL_DELAY: 70,
              INITIAL_RANDOM_DURATION: 1000,
            }}
            trigger="interval"
            interval={6000}
            className="text-lg sm:text-base"
            charset={[...profile.name.toUpperCase().replace(/\s+/g, ""), ..."1234567890", "X", "$", "@", "#", "?", "%"]}
          >
            {profile.name.toUpperCase()}
          </LetterFx>
        </TextLogo>
      </div>

      {/* Resume/CV Button */}
      <Link
        href={profile.cv}
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
        className="fixed z-10 top-5 right-5 w-40 hidden sm:flex"
        aria-label="Download CV"
      >
        <TextLogo className="flex justify-center items-center bg-card/80">
          <FileUser className="size-4" />
          RESUME / CV
        </TextLogo >
      </Link >
    </>
  );
}

export { Header };
