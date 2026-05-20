import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { CourseCategoriesSection } from "@/components/sections/course-categories-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TrustSection } from "@/components/sections/trust-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <CourseCategoriesSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <FaqSection />
        <ContactCtaSection />
      </main>
      <Footer />
    </div>
  );
}
