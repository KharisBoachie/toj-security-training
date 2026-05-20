import Link from "next/link";
import { Mail, PhoneCall } from "lucide-react";

import { PremiumButton } from "@/components/primitives/premium-button";
import { siteConfig } from "@/lib/constants/site";

export function ContactFallbackPanel() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-brand-blue/14 bg-[linear-gradient(145deg,rgba(244,249,245,0.92)_0%,rgba(239,247,242,0.78)_100%)] p-7 shadow-[0_34px_105px_-76px_hsl(var(--wc-shadow-color)/0.45)] sm:p-9">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/46 to-transparent" />
      <div className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full bg-brand-blue/12 blur-3xl" />

      <div className="relative z-10 space-y-5">
        <p className="text-eyebrow text-primary/86">Need help choosing a course?</p>
        <h2 className="max-w-3xl text-heading-md text-ink">
          Speak with TOJ for pathway guidance before you register.
        </h2>
        <p className="max-w-prose text-sm leading-7 text-ink-muted">
          If you need support selecting the right course or planning enrolment for
          a team, contact TOJ directly and we will guide your next steps.
        </p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <PremiumButton
            tone="secondary"
            nativeButton={false}
            className="w-full border-brand-blue/20 bg-white/75 text-ink hover:border-brand-blue/36 hover:bg-white sm:w-auto"
            render={<a href={`tel:${siteConfig.contact.phonePrimaryHref}`} />}
          >
            <PhoneCall className="size-4" />
            {siteConfig.contact.phonePrimary}
          </PremiumButton>
          <PremiumButton
            tone="secondary"
            nativeButton={false}
            className="w-full border-brand-blue/20 bg-white/75 text-ink hover:border-brand-blue/36 hover:bg-white sm:w-auto"
            render={<a href={`mailto:${siteConfig.contact.email}`} />}
          >
            <Mail className="size-4" />
            {siteConfig.contact.email}
          </PremiumButton>
          <PremiumButton
            nativeButton={false}
            className="w-full bg-brand-blue-deep text-white hover:bg-primary hover:text-white sm:w-auto"
            render={<Link href="/contact" />}
          >
            Go to contact page
          </PremiumButton>
        </div>
      </div>
    </section>
  );
}
