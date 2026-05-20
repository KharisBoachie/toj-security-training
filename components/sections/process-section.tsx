import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { processSteps } from "@/lib/data/home";

export function ProcessSection() {
  return (
    <SectionShell id="process" className="bg-muted/20">
      <Container className="space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            How it works
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A clear process from enquiry to course completion.
          </h2>
        </div>

        <ol className="grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-border/80 bg-card p-5 sm:p-6"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                STEP {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </SectionShell>
  );
}
