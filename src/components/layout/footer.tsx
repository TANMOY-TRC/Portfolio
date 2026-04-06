import Link from "next/link";
import { Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";

import { profile } from "@/data/profile";
import { footerSocials } from "@/data/socials";

function Footer() {
  return (
    <>
      <div className="bg-footer border-t-1 min-h-16 pb-18 sm:pb-0 font-medium text-xs sm:text-sm">
        <div className="p-4 sm:p-5 pt-6 sm:pt-8 max-w-250 mx-auto flex flex-col gap-8 justify-center">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            {/* Footer Profile */}
            <div>
              <span className="flex gap-2 items-center mb-2">
                <Terminal className="size-4.5 sm:size-5 text-primary stroke-3" />
                <p className="text-base sm:text-lg font-semibold">
                  {profile.name.toUpperCase()}
                </p>
              </span>
              <p className="md:max-w-150 text-muted-foreground md:text-balance">
                {profile.footerBio}
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-row gap-2 self-center">
              {footerSocials.map((social, index) => (
                <Button asChild key={index} variant={"tab"} size={"sm"} className="button hover-effect has-[>svg]:px-2 aspect-square" aria-label={social.title}>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" prefetch={false}>
                    {social.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="self-center text-muted-foreground">&copy; {profile.copyrightYear}&nbsp;<span className="text-primary">{profile.name.toUpperCase()}</span>. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export { Footer };
