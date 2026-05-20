import { ContentBand } from "@/components/primitives/content-band";
import { PageContainer } from "@/components/primitives/page-container";
import { PremiumButton } from "@/components/primitives/premium-button";
import { SectionContainer } from "@/components/primitives/section-container";
import Link from "next/link";
import { siteConfig } from "@/lib/constants/site";

export function ContactCtaSection() {
  return (
    <SectionContainer id="contact" className="bg-ink pb-24 text-white">
      <PageContainer>
        <ContentBand className="rounded-[2rem] border-white/14 bg-white/[0.04] p-7 shadow-[0_40px_110px_-70px_hsl(var(--brand-blue)/0.62)] sm:p-10">
          <div className="section-rhythm">
            <p className="text-eyebrow text-brand-blue/84">Final step</p>
            <h2 className="max-w-4xl text-heading-lg text-white">
              Ready to discuss the right course pathway?
            </h2>
            <p className="max-w-prose text-body text-white/74">
              Speak with TOJ Security Training about security licensing, English
              preparation, or workplace short courses.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PremiumButton
                nativeButton={false}
                className="bg-white text-ink hover:bg-brand-blue hover:text-white"
                render={<Link href="/contact" />}
              >
                Enquire Now
              </PremiumButton>
              <PremiumButton
                tone="secondary"
                nativeButton={false}
                className="border-white/20 bg-white/[0.05] text-white hover:bg-white/[0.1]"
                render={<a href={`tel:${siteConfig.contact.phonePrimaryHref}`} />}
              >
                Call TOJ
              </PremiumButton>
            </div>
          </div>
        </ContentBand>
      </PageContainer>
    </SectionContainer>
  );
}
