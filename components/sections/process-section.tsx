import { ContentBand } from "@/components/primitives/content-band";
import { PageContainer } from "@/components/primitives/page-container";
import { SectionContainer } from "@/components/primitives/section-container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { processSteps } from "@/lib/data/home";

export function ProcessSection() {
  return (
    <SectionContainer id="process" className="bg-muted/25">
      <PageContainer className="section-rhythm">
        <SectionHeading
          eyebrow="How it works"
          title="A clear process from enquiry to course completion."
        />

        <ol className="grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <ContentBand className="p-5 sm:p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                  STEP {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground copy-rhythm">
                  {step.description}
                </p>
              </ContentBand>
            </li>
          ))}
        </ol>
      </PageContainer>
    </SectionContainer>
  );
}
