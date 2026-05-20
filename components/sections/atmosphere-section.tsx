import Link from "next/link";

import { PageContainer } from "@/components/primitives/page-container";
import { PremiumButton } from "@/components/primitives/premium-button";
import { SectionContainer } from "@/components/primitives/section-container";

export function AtmosphereSection() {
  return (
    <SectionContainer className="bg-ink py-16 sm:py-20">
      <PageContainer>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-black min-h-[16rem] sm:min-h-[20rem] lg:min-h-[22rem]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/toj-training-environment-office.png')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,hsl(var(--ink)/0.86)_0%,hsl(var(--ink)/0.72)_48%,hsl(var(--ink)/0.46)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-[58%] bg-[radial-gradient(circle_at_18%_24%,hsl(var(--brand-blue)/0.26),transparent_62%)]" />

          <div className="relative z-10 flex h-full flex-col justify-center p-7 sm:p-10 lg:max-w-[55%]">
            <p className="text-eyebrow text-brand-blue/84">Operational value</p>
            <h2 className="mt-4 text-heading-lg text-white">
              Built to improve readiness, compliance, and team performance.
            </h2>
            <p className="mt-4 max-w-prose text-body text-white/74">
              TOJ Security Training helps individuals and employer teams reduce
              training uncertainty through structured pathways, practical
              instruction, and clearer progression into real workplace
              responsibilities.
            </p>
            <PremiumButton
              nativeButton={false}
              render={<Link href="/contact" />}
              className="mt-6 w-fit bg-white text-ink hover:bg-brand-blue hover:text-white"
            >
              Plan your training pathway
            </PremiumButton>
          </div>
        </div>
      </PageContainer>
    </SectionContainer>
  );
}
