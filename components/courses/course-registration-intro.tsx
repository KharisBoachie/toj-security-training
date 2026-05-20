import { SectionHeading } from "@/components/primitives/section-heading";

const steps = [
  {
    index: "01",
    title: "Choose course",
    description: "Select the pathway that matches your role and progression goal.",
  },
  {
    index: "02",
    title: "Submit details",
    description:
      "Complete the registration form so TOJ can review your enquiry requirements.",
  },
  {
    index: "03",
    title: "TOJ contacts you",
    description:
      "Our team will follow up with next steps and enrolment guidance.",
  },
] as const;

export function CourseRegistrationIntro() {
  return (
    <section className="section-rhythm">
      <SectionHeading
        eyebrow="Course registration"
        title="Start your registration in three clear steps."
        description="Choose your course pathway, submit your details, and TOJ Security Training will review your application before contacting you directly. Online payment is not enabled yet."
        titleClassName="max-w-[54rem] text-heading-lg text-ink"
        descriptionClassName="max-w-prose text-body text-ink-muted"
      />

      <div className="grid gap-3 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-2xl border border-brand-blue/10 bg-white/70 p-5 shadow-[0_24px_70px_-54px_hsl(var(--wc-shadow-color)/0.28)] backdrop-blur-sm"
          >
            <p className="font-mono text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-primary/82">
              {step.index}
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-[-0.025em] text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-ink-muted">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
