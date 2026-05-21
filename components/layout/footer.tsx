import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";

import { PageContainer } from "@/components/primitives/page-container";
import { footerNavigationLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,hsl(var(--brand-blue)/0.16),transparent_44%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(222_47%_4%/0.55)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
      </div>

      <PageContainer className="relative py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] px-6 py-7 shadow-[0_30px_90px_-64px_hsl(var(--brand-blue)/0.42)] backdrop-blur-sm sm:px-8 sm:py-9 lg:px-10">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue/80">
              Employer & team bookings
            </p>
            <h2 className="max-w-3xl text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl lg:text-4xl">
              Plan workforce training with clear compliance priorities.
            </h2>
            <p className="max-w-prose text-sm leading-7 text-white/64">
              Speak with TOJ about team cohorts, role-specific pathways, and
              practical scheduling that supports operational continuity.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-ink transition-all duration-premium ease-premium hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white"
              >
                Discuss team training
              </Link>
              <a
                href={`tel:${siteConfig.contact.phonePrimaryHref}`}
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/16 bg-white/[0.045] px-5 text-sm font-medium text-white transition-all duration-premium ease-premium hover:-translate-y-0.5 hover:bg-white/[0.1]"
              >
                Call TOJ
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-12 border-y border-white/10 py-12 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3">
              <span className="relative size-[50px] overflow-hidden">
                <Image
                  src="/TOJ.png"
                  alt="TOJ Security Training logo"
                  fill
                  sizes="50px"
                  className="object-contain"
                />
              </span>
              <h3 className="text-heading-sm font-bold text-white">
                TOJ Security Training
              </h3>
            </div>
            <p className="max-w-prose text-sm leading-7 text-white/64">
              Structured pathways for SIA licensing, English preparation, and
              workplace short courses delivered with operational focus.
            </p>
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Call",
                  href: `tel:${siteConfig.contact.phonePrimaryHref}`,
                  icon: PhoneCall,
                },
                {
                  label: "Email",
                  href: `mailto:${siteConfig.contact.email}`,
                  icon: Mail,
                },
                {
                  label: "Address",
                  href: "/contact",
                  icon: MapPin,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_hsl(0_0%_100%/0.14)] transition-all duration-premium ease-premium hover:-translate-y-0.5 hover:bg-white/[0.1]"
                >
                  <item.icon className="size-4 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,hsl(156_34%_8%/0.92),hsl(156_34%_5%/0.74))] p-6 shadow-[0_34px_100px_-72px_hsl(var(--brand-blue)/0.62)] backdrop-blur-md sm:min-w-[24rem] sm:p-7 lg:justify-self-end">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
            <div className="pointer-events-none absolute -right-18 -top-14 h-38 w-38 rounded-full bg-brand-blue/18 blur-3xl" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue/82">
              Contact & links
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.contact.phonePrimaryHref}`}
                className="group inline-flex items-center gap-2 text-white/82 transition-colors duration-premium ease-premium hover:text-white"
              >
                <PhoneCall className="size-4 text-brand-blue" />
                <span className="underline underline-offset-4 decoration-white/20 transition-colors duration-premium ease-premium group-hover:decoration-white/60">
                  {siteConfig.contact.phonePrimary}
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group inline-flex items-center gap-2 text-white/82 transition-colors duration-premium ease-premium hover:text-white"
              >
                <Mail className="size-4 text-brand-blue" />
                <span className="underline underline-offset-4 decoration-white/20 transition-colors duration-premium ease-premium group-hover:decoration-white/60">
                  {siteConfig.contact.email}
                </span>
              </a>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/58">
              {siteConfig.contact.address}
            </p>

            <div className="mt-6 grid gap-2">
              {footerNavigationLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold text-white/58 transition-colors duration-premium ease-premium hover:text-white/84",
                    )}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 py-7 text-xs leading-6 text-white/46 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <p>© {new Date().getFullYear()} TOJ Security Training. All rights reserved.</p>
          <div className="flex items-center gap-4 lg:justify-center">
            <Link
              href="/about"
              className="transition-colors duration-premium ease-premium hover:text-white/72"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors duration-premium ease-premium hover:text-white/72"
            >
              Contact
            </Link>
            <Link
              href="/courses"
              className="transition-colors duration-premium ease-premium hover:text-white/72"
            >
              Courses
            </Link>
          </div>
          <p className="lg:text-right">
            Built with intentional structure and operational calm.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
