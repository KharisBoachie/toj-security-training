"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { PremiumButton } from "@/components/primitives/premium-button";
import { type CourseOption } from "@/lib/data/courses";

type CourseOptionCardProps = {
  course: CourseOption;
  onRegister: (course: CourseOption) => void;
};

export function CourseOptionCard({ course, onRegister }: CourseOptionCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-brand-blue/12 bg-white/80 p-6 shadow-[0_32px_85px_-58px_hsl(var(--wc-shadow-color)/0.28)] backdrop-blur-sm transition-all duration-premium ease-premium hover:-translate-y-1 hover:border-brand-blue/24 hover:shadow-[0_42px_100px_-58px_hsl(var(--brand-blue)/0.22)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.62)_0%,rgba(255,255,255,0.35)_52%,rgba(236,246,239,0.24)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/45 to-transparent" />

      <div className="relative space-y-4">
        <div className="flex items-start justify-between gap-3">
          <p className="inline-flex w-fit rounded-full border border-brand-blue/14 bg-white/74 px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-primary/82">
            {course.category}
          </p>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-blue/14 bg-white/75">
            <ShieldCheck className="size-4 text-primary" />
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-[1.35rem] leading-[1.05] tracking-[-0.035em] font-semibold text-ink">
            {course.title}
          </h3>
          <p className="text-sm leading-7 text-ink-muted">{course.summary}</p>
        </div>

        <div className="rounded-xl border border-brand-blue/10 bg-white/70 px-3.5 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/74">
            Suitable for
          </p>
          <p className="mt-1.5 text-sm leading-6 text-ink/84">{course.suitableFor}</p>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row">
          <PremiumButton
            onClick={() => onRegister(course)}
            className="w-full bg-brand-blue-deep text-white hover:bg-primary hover:text-white sm:w-auto"
          >
            Register interest
          </PremiumButton>

          {course.detailHref ? (
            <PremiumButton
              tone="secondary"
              nativeButton={false}
              render={<Link href={course.detailHref} />}
              className="w-full border-brand-blue/18 bg-white/74 text-ink hover:border-brand-blue/36 hover:bg-white sm:w-auto"
            >
              View details
              <ArrowUpRight className="size-4" />
            </PremiumButton>
          ) : null}
        </div>
      </div>
    </article>
  );
}
