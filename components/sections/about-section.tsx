import { ContentBand } from "@/components/primitives/content-band";
import { PageContainer } from "@/components/primitives/page-container";
import { PremiumButton } from "@/components/primitives/premium-button";
import { SectionContainer } from "@/components/primitives/section-container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <SectionContainer id="about" className="bg-canvas-subtle">
      <PageContainer>
        <ContentBand className="relative grid gap-8 overflow-hidden rounded-[2rem] border-line/70 bg-[linear-gradient(145deg,rgba(250,252,248,0.96),rgba(244,248,244,0.92))] p-6 shadow-[0_34px_110px_-88px_hsl(var(--wc-shadow-color)/0.48)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full border border-brand-blue/10" />
          <div className="pointer-events-none absolute left-8 bottom-8 h-[72px] w-[72px] bg-[radial-gradient(circle,_hsl(var(--brand-blue)/0.2)_1px,_transparent_1px)] bg-[size:8px_8px] opacity-35" />

          <div className="relative z-10 section-rhythm lg:pr-5">
            <SectionHeading
              eyebrow="Admissions & learner guidance"
              title="Clear route selection and enrolment support for home and international learners."
              description="From SIA licensing and English preparation (A1, A2, B1) to workplace short courses, TOJ helps you choose the right pathway and understand next steps before enrolment."
              titleClassName="max-w-[32rem] text-[clamp(2rem,3.3vw,3rem)] leading-[0.96] tracking-[-0.052em] text-ink"
              descriptionClassName="max-w-[30rem] text-[1.03rem] leading-8 text-ink-muted"
              className="space-y-5"
            />
            <div className="h-px w-14 bg-brand-blue/30" />
            <PremiumButton
              nativeButton={false}
              render={<Link href="/contact" />}
              className="h-11 w-fit bg-brand-blue-deep px-5 text-white shadow-none hover:bg-primary hover:text-white"
            >
              Get admissions guidance
              <ArrowUpRight className="size-4" />
            </PremiumButton>
          </div>

          <div className="relative min-h-[19rem] overflow-hidden rounded-[1.9rem] border border-line/75 bg-ink sm:min-h-[24rem]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/toj-training-environment-office.png')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,250,246,0.9)_0%,rgba(247,250,246,0.42)_20%,rgba(247,250,246,0.04)_40%,rgba(8,16,12,0.26)_100%)]" />
            <div className="absolute inset-y-0 left-0 w-[44%] bg-[radial-gradient(circle_at_14%_55%,rgba(255,255,255,0.62),rgba(255,255,255,0.12)_46%,transparent_74%)] blur-xl" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/22 to-transparent" />
          </div>
        </ContentBand>
      </PageContainer>
    </SectionContainer>
  );
}
