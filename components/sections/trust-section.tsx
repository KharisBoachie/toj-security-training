import { Award, Shield, UserRoundCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const trustCards = [
  {
    title: "Compliance-Led Delivery",
    description:
      "Programmes are structured around current professional requirements and practical industry expectations.",
    icon: Shield,
  },
  {
    title: "Qualified Instructors",
    description:
      "Learners are guided by trainers with real operational and teaching experience in relevant sectors.",
    icon: UserRoundCheck,
  },
  {
    title: "Recognised Pathways",
    description:
      "Course pathways are designed to support licence progress, workplace readiness, and continued development.",
    icon: Award,
  },
] as const;

export function TrustSection() {
  return (
    <SectionShell>
      <Container className="space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Why organisations and learners choose TOJ
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Training that prioritises trust, standards, and practical outcomes.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {trustCards.map((card) => (
            <Card
              key={card.title}
              className="border-border/80 bg-card transition-transform duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <card.icon className="size-5 text-primary" />
                <CardTitle className="text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
