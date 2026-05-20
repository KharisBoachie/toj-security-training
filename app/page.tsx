import { SiteShell } from "@/components/layout/site-shell";
import { AboutSection } from "@/components/sections/about-section";
import { AtmosphereSection } from "@/components/sections/atmosphere-section";
import { CourseCategoriesSection } from "@/components/sections/course-categories-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <TrustSection />
      <AtmosphereSection />
      <CourseCategoriesSection />
      <AboutSection />
    </SiteShell>
  );
}
