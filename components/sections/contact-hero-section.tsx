import Link from "next/link";

import { PremiumButton } from "@/components/primitives/premium-button";
import { siteConfig } from "@/lib/constants/site";

export function ContactHeroSection() {
  return (
    <section className="relative -mt-[var(--header-height)] min-h-[100svh] overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-[position:74%_center] md:bg-[position:76%_center]"
        style={{ backgroundImage: "url('/images/toj-contact-hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(16,17,17,0.78)_0%,rgba(19,19,18,0.62)_33%,rgba(24,21,17,0.34)_62%,rgba(24,20,15,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(227,184,108,0.26),transparent_42%),radial-gradient(circle_at_18%_80%,rgba(243,229,199,0.14),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[58%] bg-[linear-gradient(90deg,rgba(19,20,20,0.8)_0%,rgba(20,20,19,0.64)_40%,rgba(20,19,18,0.28)_76%,transparent_100%)]" />
      <div className="pointer-events-none absolute -left-16 top-[-10%] h-[122%] w-[38%] rotate-[14deg] bg-white/7" />
      <div className="pointer-events-none absolute left-[17%] top-[-16%] h-[128%] w-[20%] rotate-[20deg] bg-white/5" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,6,6,0.08)_0%,rgba(5,6,6,0.22)_62%,rgba(6,7,7,0.62)_100%)]" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.07)_0.6px,transparent_0.6px)] [background-size:3px_3px] opacity-[0.06]" />

      <div className="relative z-10 flex min-h-[100svh] items-center px-5 pt-[var(--header-height)] pb-16 sm:px-8 lg:px-10 xl:px-12">
        <div className="max-w-[620px] section-rhythm">
          <p className="text-eyebrow text-white/84">Contact admissions</p>
          <h1 className="text-balance text-[clamp(3rem,6.4vw,6.7rem)] leading-[0.88] tracking-[-0.074em] font-semibold text-white">
            Begin your next step with TOJ Security Training.
          </h1>
          <p className="max-w-[36rem] text-[1.05rem] leading-8 text-white/79">
            Speak with our team about course pathways, employer requirements, and
            admissions support in a calm, professional, and practical way.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
            <PremiumButton
              nativeButton={false}
              className="h-12 bg-white px-6 text-ink shadow-[0_18px_48px_-30px_rgba(0,0,0,0.55)] hover:bg-brand-blue hover:text-white"
              render={<Link href="#contact-enquiry" />}
            >
              Enquire now
            </PremiumButton>
            <PremiumButton
              tone="secondary"
              nativeButton={false}
              className="h-12 border-white/24 bg-white/9 px-6 text-white hover:bg-white/16"
              render={<a href={`tel:${siteConfig.contact.phonePrimaryHref}`} />}
            >
              Call TOJ
            </PremiumButton>
            <PremiumButton
              tone="secondary"
              nativeButton={false}
              className="h-12 border-white/24 bg-white/9 px-6 text-white hover:bg-white/16"
              render={<a href={`mailto:${siteConfig.contact.email}`} />}
            >
              Email admissions
            </PremiumButton>
          </div>

          <div className="pt-1">
            <p className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-white/84 backdrop-blur-[1px]">
              Admissions team available for individual and employer enquiries
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/46 to-transparent" />
    </section>
  );
}
