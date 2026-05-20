import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness, Languages, PhoneCall, ShieldCheck } from "lucide-react";

import { SiteShell } from "@/components/layout/site-shell";
import { ContentBand } from "@/components/primitives/content-band";
import { IndexedFeatureList } from "@/components/primitives/indexed-feature-list";
import { PageContainer } from "@/components/primitives/page-container";
import { PremiumButton } from "@/components/primitives/premium-button";
import { SectionContainer } from "@/components/primitives/section-container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about TOJ Security Training and our professional approach to security and workplace training.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About TOJ Security Training"
        title="A focused training provider for security, compliance, and workplace capability."
        description="TOJ Security Training supports individuals and organisations with practical, standards-led delivery that prioritises professionalism and long-term learner confidence."
        backgroundImage="/images/toj-about-hero-bg.png"
        variant="immersive"
      />

      <SectionContainer className="bg-[linear-gradient(145deg,#f7faf6_0%,#f4f8f3_44%,#f6f8f3_100%)] pt-12 sm:pt-16">
        <PageContainer className="section-rhythm">
          <ContentBand className="grid gap-8 border-line/75 bg-white/76 p-7 shadow-[0_34px_90px_-66px_hsl(var(--wc-shadow-color)/0.36)] sm:p-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              eyebrow="Our role"
              title="Training built around professionalism, confidence, and real-world readiness."
              description="TOJ supports individual learners and organisations through practical security training pathways, English preparation guidance, and workplace short courses designed for operational relevance."
              titleClassName="text-heading-lg text-ink"
              descriptionClassName="text-body text-ink-muted"
              className="space-y-5"
            />

            <IndexedFeatureList
              items={[
                {
                  title: "Standards-led delivery",
                  description:
                    "Programmes are structured around professional expectations and role-relevant compliance priorities.",
                },
                {
                  title: "Practical learner support",
                  description:
                    "Guidance is clear, approachable, and focused on building confidence across each stage of progression.",
                },
                {
                  title: "Clear progression routes",
                  description:
                    "Learners and teams can navigate from entry pathways to targeted upskilling without unnecessary complexity.",
                },
              ]}
            />
          </ContentBand>

          <section className="section-rhythm">
            <SectionHeading
              eyebrow="What we deliver"
              title="Focused pathways for security, communication, and workplace capability."
              description="Each delivery area is designed to support practical outcomes for both individual applicants and employer-led teams."
              titleClassName="text-heading-md text-ink"
              descriptionClassName="text-body text-ink-muted"
            />

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "SIA security pathways",
                  description:
                    "Door Supervisor, CCTV, and Security Top-Up routes aligned with operational expectations.",
                  icon: ShieldCheck,
                },
                {
                  title: "English preparation support",
                  description:
                    "A1, A2, and B1 preparation focused on practical communication confidence and progression.",
                  icon: Languages,
                },
                {
                  title: "Workplace short courses",
                  description:
                    "Targeted modules for first aid, safeguarding, safety awareness, and role-specific readiness.",
                  icon: BriefcaseBusiness,
                },
              ].map((item) => (
                <ContentBand
                  key={item.title}
                  className="rounded-[1.6rem] border-brand-blue/12 bg-white/80 p-6 shadow-[0_30px_85px_-60px_hsl(var(--wc-shadow-color)/0.34)]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-blue/16 bg-white/80">
                    <item.icon className="size-4 text-primary" />
                  </span>
                  <h3 className="mt-4 text-xl leading-[1.06] tracking-[-0.03em] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ink-muted">
                    {item.description}
                  </p>
                </ContentBand>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink px-7 py-9 text-white shadow-[0_36px_100px_-70px_hsl(var(--wc-shadow-color)/0.6)] sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,hsl(var(--brand-blue)/0.24),transparent_40%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(95deg,hsl(var(--ink)/0.84)_0%,hsl(var(--ink)/0.68)_52%,hsl(var(--ink)/0.9)_100%)]" />
            <div className="relative z-10 space-y-4">
              <p className="text-eyebrow text-brand-blue/86">Why it matters</p>
              <h2 className="max-w-4xl text-heading-lg text-white">
                TOJ helps learners build confidence, improve readiness, and take
                the next step toward work or compliance requirements.
              </h2>
              <p className="max-w-prose text-body text-white/74">
                Practical instruction, clearer progression pathways, and
                professional support help applicants and teams make better
                decisions before and after course completion.
              </p>
            </div>
          </section>

          <ContentBand className="rounded-[2rem] border-brand-blue/14 bg-white/82 p-7 sm:p-10">
            <SectionHeading
              eyebrow="Next step"
              title="Ready to discuss training with TOJ?"
              description="Choose your route now, or speak with our team for guidance before registration."
              titleClassName="text-heading-md text-ink"
              descriptionClassName="text-body text-ink-muted"
            />
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <PremiumButton nativeButton={false} render={<Link href="/courses" />}>
                View Courses
              </PremiumButton>
              <PremiumButton
                tone="secondary"
                nativeButton={false}
                className="border-brand-blue/18 bg-white/75 text-ink hover:border-brand-blue/34 hover:bg-white"
                render={<Link href="/contact" />}
              >
                Enquire Now
              </PremiumButton>
              <PremiumButton
                tone="secondary"
                nativeButton={false}
                className="border-brand-blue/18 bg-white/75 text-ink hover:border-brand-blue/34 hover:bg-white"
                render={<a href={`tel:${siteConfig.contact.phonePrimaryHref}`} />}
              >
                <PhoneCall className="size-4" />
                Call TOJ
              </PremiumButton>
            </div>
          </ContentBand>
        </PageContainer>
      </SectionContainer>
    </SiteShell>
  );
}
