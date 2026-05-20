import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageContainer } from "@/components/primitives/page-container";
import { PathwayCard } from "@/components/primitives/pathway-card";
import { SectionContainer } from "@/components/primitives/section-container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { PremiumButton } from "@/components/primitives/premium-button";
import { pathwayGroups } from "@/lib/data/home";

export function CourseCategoriesSection() {
  return (
    <SectionContainer
      id="courses"
      className="relative overflow-hidden bg-[linear-gradient(145deg,#f7faf6_0%,#f4f8f3_44%,#f5f7f2_100%)] py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,hsl(var(--brand-blue)/0.12),transparent_42%),radial-gradient(circle_at_88%_84%,rgba(224,198,144,0.2),transparent_40%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] top-[8%] h-64 w-64 rounded-full border border-white/45 bg-white/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[16%] h-52 w-52 rounded-full border border-brand-blue/10 bg-brand-blue/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[15%] hidden h-44 w-44 items-center justify-center rounded-full border border-brand-blue/8 md:flex"
      >
        <div className="h-28 w-28 rounded-full border border-brand-blue/12" />
      </div>

      <PageContainer className="relative z-10 section-rhythm">
        <div className="grid gap-5">
          <SectionHeading
            eyebrow="Course Pathways"
            title="Professional routes for licensing, communication, and workplace readiness."
            description="Choose the pathway that matches your role, requirement, or team development priority."
            titleClassName="text-heading-lg max-w-[52rem] text-ink"
            descriptionClassName="text-body text-ink-muted"
            className="space-y-5"
          />
          <PremiumButton
            nativeButton={false}
            compact
            tone="secondary"
            className="w-fit border-brand-blue/18 bg-white/72 text-ink backdrop-blur-sm hover:border-brand-blue/34 hover:bg-white"
            render={<Link href="/courses" />}
          >
            View all courses
            <ArrowRight className="size-4" />
          </PremiumButton>
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {pathwayGroups.map((group, index) => (
            <PathwayCard
              key={group.title}
              index={index}
              title={group.title}
              description={group.description}
              items={group.items}
              href={group.href}
              icon={group.icon}
              className={index === 2 ? "lg:col-span-2" : ""}
            />
          ))}
        </div>
      </PageContainer>
    </SectionContainer>
  );
}
