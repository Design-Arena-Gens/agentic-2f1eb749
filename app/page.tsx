"use client";

import { HeroSection } from "../components/HeroSection";
import { LanguageGrid } from "../components/LanguageGrid";
import { MissionCarousel } from "../components/MissionCarousel";
import { ImmersiveExperience } from "../components/ImmersiveExperience";
import { ProgressPulse } from "../components/ProgressPulse";
import { Testimonials } from "../components/Testimonials";
import { FooterCta } from "../components/FooterCta";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 md:py-16">
      <HeroSection />
      <LanguageGrid />
      <MissionCarousel />
      <ImmersiveExperience />
      <ProgressPulse />
      <Testimonials />
      <FooterCta />
      <footer className="pb-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} LingoJoy. صُمم بشغف للمتعلمين حول العالم.
      </footer>
    </main>
  );
}
