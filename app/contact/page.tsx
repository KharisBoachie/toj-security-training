import type { Metadata } from "next";
import { Mail, MapPin, PhoneCall } from "lucide-react";

import { SiteShell } from "@/components/layout/site-shell";
import { ContentBand } from "@/components/primitives/content-band";
import { PageContainer } from "@/components/primitives/page-container";
import { PremiumButton } from "@/components/primitives/premium-button";
import { SectionContainer } from "@/components/primitives/section-container";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TOJ Security Training for course guidance, employer bookings, and training enquiries.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactHeroSection />

      <SectionContainer id="contact-enquiry" className="-mt-10 pb-20 pt-0 sm:-mt-12 lg:-mt-16">
        <PageContainer>
          <ContentBand className="relative overflow-hidden rounded-[2rem] border-line/75 bg-[linear-gradient(145deg,rgba(248,251,246,0.98)_0%,rgba(243,248,243,0.94)_44%,rgba(249,252,247,0.92)_100%)] p-5 shadow-[0_38px_120px_-86px_hsl(var(--wc-shadow-color)/0.44)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,hsl(var(--brand-blue)/0.12),transparent_38%),radial-gradient(circle_at_88%_90%,rgba(230,206,156,0.18),transparent_34%)]" />

            <div className="relative grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:gap-6">
              <aside className="rounded-[1.55rem] border border-brand-blue/12 bg-white/72 p-6 shadow-[0_28px_82px_-62px_hsl(var(--wc-shadow-color)/0.34)] sm:p-7">
                <p className="text-eyebrow text-primary/84">Admissions office</p>
                <h2 className="mt-3 text-heading-sm text-ink">
                  Contact TOJ admissions and training support.
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink-muted">
                  Speak with our team for guidance on course routes, employer
                  enquiries, and the right next step for application.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      label: "Location",
                      value: siteConfig.contact.address,
                      href: "/contact",
                      icon: MapPin,
                    },
                    {
                      label: "Phone",
                      value: siteConfig.contact.phonePrimary,
                      href: `tel:${siteConfig.contact.phonePrimaryHref}`,
                      icon: PhoneCall,
                    },
                    {
                      label: "Email",
                      value: siteConfig.contact.email,
                      href: `mailto:${siteConfig.contact.email}`,
                      icon: Mail,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="space-y-2 border-b border-line/70 pb-3 last:border-b-0 last:pb-0"
                    >
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary/76">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-premium ease-premium hover:text-primary"
                      >
                        <item.icon className="size-4 text-primary/88" />
                        <span>{item.value}</span>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-brand-blue/12 bg-white/72 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
                    Admissions support
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink-muted">
                    Individual learner and employer team guidance available.
                  </p>
                </div>
              </aside>

              <section className="rounded-[1.55rem] border border-brand-blue/12 bg-white/84 p-6 shadow-[0_30px_88px_-62px_hsl(var(--wc-shadow-color)/0.36)] sm:p-7">
                <p className="text-eyebrow text-primary/84">Enquiry form</p>
                <h3 className="mt-3 text-heading-sm text-ink">
                  Tell us what support you need
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink-muted">
                  Complete the form and our admissions team will contact you to
                  discuss suitable training pathways.
                </p>

                <form className="mt-6 space-y-6">
                  <div className="space-y-3.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/78">
                      Applicant details
                    </p>
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-ink">Full name</label>
                        <Input
                          placeholder="Enter full name"
                          aria-label="Full name"
                          className="h-11 rounded-xl border-line/80 bg-white/80 px-3.5"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-ink">Phone number</label>
                        <Input
                          placeholder="Enter phone number"
                          aria-label="Phone number"
                          className="h-11 rounded-xl border-line/80 bg-white/80 px-3.5"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-ink">Email address</label>
                      <Input
                        placeholder="Enter email address"
                        type="email"
                        aria-label="Email address"
                        className="h-11 rounded-xl border-line/80 bg-white/80 px-3.5"
                      />
                    </div>
                  </div>

                  <Separator className="bg-line/70" />

                  <div className="space-y-3.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/78">
                      Enquiry details
                    </p>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-ink">
                        Training requirements
                      </label>
                      <Textarea
                        className="min-h-34 rounded-xl border-line/80 bg-white/80 px-3.5 py-3.5"
                        placeholder="Tell us what training you need, your preferred timeline, and whether this is for an individual or organisation."
                        aria-label="Training enquiry"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-6 text-ink-muted">
                      We respond with practical next-step guidance based on your
                      enquiry details.
                    </p>
                    <PremiumButton className="w-full bg-brand-blue-deep text-white hover:bg-primary hover:text-white sm:w-auto">
                      Submit Enquiry
                    </PremiumButton>
                  </div>
                </form>
              </section>
            </div>
          </ContentBand>
        </PageContainer>
      </SectionContainer>
    </SiteShell>
  );
}
