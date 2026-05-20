import { PageContainer } from "@/components/primitives/page-container";
import { SectionContainer } from "@/components/primitives/section-container";
import { BriefcaseBusiness, ShieldCheck, UserCheck, Workflow } from "lucide-react";

const trustHighlights = [
  {
    title: "Industry Recognised",
    description: "Training aligned with SIA standards and UK compliance requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from professionals with real industry and operational experience.",
    icon: UserCheck,
  },
  {
    title: "Practical & Relevant",
    description:
      "Real-world training designed to build confidence and workplace capability.",
    icon: Workflow,
  },
  {
    title: "Career Progression",
    description: "Pathways that support your growth from license to leadership.",
    icon: BriefcaseBusiness,
  },
] as const;

export function TrustSection() {
  return (
    <SectionContainer className="relative overflow-hidden bg-ink py-9 sm:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(to_bottom,hsl(var(--ink)/0.06)_0%,hsl(var(--ink)/0.42)_56%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-12%] top-[-4.75rem] h-36 bg-[radial-gradient(ellipse_at_center,hsl(var(--brand-blue)/0.14)_0%,hsl(var(--brand-blue)/0.08)_42%,transparent_74%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"
      />
      <PageContainer className="relative z-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {trustHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_22px_58px_-48px_hsl(var(--brand-blue)/0.45)]"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.03]">
                  <item.icon className="size-5 text-brand-blue" />
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/66">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </SectionContainer>
  );
}
