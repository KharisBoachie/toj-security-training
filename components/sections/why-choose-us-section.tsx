import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { valueProps } from "@/lib/data/home";

export function WhyChooseUsSection() {
  return (
    <SectionShell>
      <Container className="space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Why students choose us
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Structured learning with the standards expected by serious
            employers.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {valueProps.map((item) => (
            <Card
              key={item.title}
              className="border-border/80 bg-card transition duration-300 hover:shadow-md"
            >
              <CardHeader className="space-y-3">
                <item.icon className="size-5 text-primary" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
