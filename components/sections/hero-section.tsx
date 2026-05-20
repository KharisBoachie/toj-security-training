import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";

import { PremiumButton } from "@/components/primitives/premium-button";
import { SectionContainer } from "@/components/primitives/section-container";

export function HeroSection() {
  return (
    <SectionContainer className="relative -mt-[var(--header-height)] min-h-[100svh] overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[position:70%_center] lg:bg-[position:65%_center]"
        style={{ backgroundImage: "url('/images/toj-hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,8,7,0.2),rgba(5,9,8,0.26),rgba(7,10,9,0.32))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,9,7,0.52)_0%,rgba(4,9,7,0.44)_36%,rgba(4,9,8,0.22)_62%,rgba(4,8,8,0.08)_100%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,12,10,0.44)_48%,rgba(7,13,11,0.86)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-18%] bottom-[-3.5rem] h-40 bg-[radial-gradient(ellipse_at_center,hsl(var(--brand-blue)/0.2)_0%,hsl(var(--brand-blue)/0.1)_34%,transparent_72%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-20 bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--ink)/0.66)_100%)]"
      />
      <div className="relative z-10 flex min-h-[100svh] items-start px-5 pt-[calc(var(--header-height)+4rem)] pb-24 sm:px-8 lg:px-10 xl:px-12">
        <div className="max-w-[860px] section-rhythm">
          <p className="text-eyebrow text-brand-blue font-semibold">
            UK SECURITY &amp; COMPLIANCE TRAINING
          </p>
          <h1 className="max-w-[850px] text-balance text-[clamp(3.2rem,6.7vw,7rem)] leading-[0.92] tracking-[-0.07em] font-semibold">
            <span className="block text-white">Train with purpose.</span>
            <span className="block text-white">Protect what matters.</span>
            <span className="block text-brand-blue">Build your future.</span>
          </h1>
          <p className="max-w-[680px] text-[1.05rem] leading-7 text-white/78">
            Professional training for security licensing, workplace readiness,
            and real-world compliance.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <PremiumButton
              nativeButton={false}
              className="bg-brand-blue-deep text-white shadow-none hover:bg-primary hover:text-white"
              render={<Link href="/courses" />}
            >
              Explore Courses
              <ArrowRight className="size-4" />
            </PremiumButton>
            <PremiumButton
              tone="secondary"
              nativeButton={false}
              className="border-white/35 bg-black/20 text-white backdrop-blur-sm hover:bg-black/30"
              render={<Link href="/courses" />}
            >
              View Pathways
            </PremiumButton>
          </div>

          <div className="flex flex-col gap-2 pt-1 text-sm text-white/78 sm:flex-row sm:items-center sm:gap-8">
            <p className="inline-flex items-center gap-2">
              <CircleCheck className="size-4 text-brand-blue" />
              SIA Pathways
            </p>
            <p className="inline-flex items-center gap-2">
              <CircleCheck className="size-4 text-brand-blue" />
              English Preparation
            </p>
            <p className="inline-flex items-center gap-2">
              <CircleCheck className="size-4 text-brand-blue" />
              Workplace Short Courses
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
