import { ContentBand } from "@/components/primitives/content-band";
import { PageContainer } from "@/components/primitives/page-container";
import { SectionContainer } from "@/components/primitives/section-container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { valueProps } from "@/lib/data/home";

export function WhyChooseUsSection() {
  return (
    <SectionContainer>
      <PageContainer className="section-rhythm">
        <SectionHeading
          eyebrow="Why students choose us"
          title="Structured learning with the standards expected by serious employers."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {valueProps.map((item) => (
            <ContentBand
              key={item.title}
              className="hover:-translate-y-1 hover:border-primary/30"
            >
              <Card className="border-none bg-transparent p-0 shadow-none ring-0">
                <CardHeader className="space-y-3 pb-4">
                  <item.icon className="size-5 text-primary" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="copy-rhythm text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </ContentBand>
          ))}
        </div>
      </PageContainer>
    </SectionContainer>
  );
}
