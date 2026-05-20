import Link from "next/link";
import { Check, type LucideIcon } from "lucide-react";

import { ContentBand } from "@/components/primitives/content-band";
import { cn } from "@/lib/utils";

type PathwayCardProps = {
  title: string;
  description: string;
  href: string;
  items: readonly string[];
  index: number;
  icon: LucideIcon;
  className?: string;
};

export function PathwayCard({
  title,
  description,
  href,
  items,
  index,
  icon: Icon,
  className,
}: PathwayCardProps) {
  return (
    <ContentBand
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-brand-blue/10 bg-white/80 p-7 shadow-[0_34px_95px_-64px_hsl(var(--wc-shadow-color)/0.32)] backdrop-blur-md transition-all duration-premium ease-premium hover:-translate-y-1 hover:border-brand-blue/24 hover:shadow-[0_42px_110px_-62px_hsl(var(--brand-blue)/0.24)] sm:p-9",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(170deg,rgba(255,255,255,0.68)_0%,rgba(255,255,255,0.3)_50%,rgba(236,246,240,0.24)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
      <div className="pointer-events-none absolute -right-14 top-[-4.5rem] h-32 w-32 rounded-full bg-[hsl(var(--brand-blue)/0.08)] blur-2xl transition-opacity duration-premium ease-premium group-hover:opacity-100" />

      <div className="relative space-y-7">
        <div className="space-y-4.5">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-primary/82">
              0{index + 1}
            </p>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-blue/15 bg-white/72 shadow-[0_14px_30px_-22px_hsl(var(--brand-blue)/0.35)]">
              <Icon className="size-4 text-primary" />
            </span>
          </div>
          <h3 className="text-[1.75rem] leading-[1.02] tracking-[-0.05em] font-semibold text-ink">
            {title}
          </h3>
          <p className="max-w-[42rem] text-sm leading-7 text-ink-muted">{description}</p>
        </div>

        <div className="grid gap-0.5 border-t border-brand-blue/12 pt-4 sm:grid-cols-2 sm:gap-x-8">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 border-b border-brand-blue/10 py-2.5 last:border-b-0 sm:last:border-b sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/8 text-brand-blue">
                <Check className="size-3" />
              </span>
              <p className="text-sm leading-6 text-ink/84">{item}</p>
            </div>
          ))}
        </div>

        <Link
          href={href}
          className="inline-flex w-fit border-b border-transparent text-sm font-semibold text-ink transition-all duration-premium ease-premium hover:border-brand-blue/50 hover:text-primary"
        >
          Explore pathway
        </Link>
      </div>
    </ContentBand>
  );
}
