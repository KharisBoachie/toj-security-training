import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <Container>
        <div className="grid gap-8 rounded-2xl border border-border/80 bg-card p-7 shadow-sm sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              About TOJ Security Training
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A modern training provider focused on long-term professional
              value.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              TOJ Security Training supports individuals entering the security
              industry and professionals maintaining high workplace standards.
              Our delivery combines practical instruction, clear communication,
              and a structured learner journey.
            </p>
            <p>
              Alongside SIA-related pathways, we provide first aid, safety, and
              care-focused programmes that help people and teams build dependable
              capability in real-world settings.
            </p>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
