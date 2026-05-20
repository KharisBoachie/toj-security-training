"use client";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/home";

export function FaqSection() {
  return (
    <SectionShell id="faq">
      <Container className="space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Frequently asked questions
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Clear answers for learners and employer teams.
          </h2>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-7">
          <Accordion defaultValue={["item-0"]}>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </SectionShell>
  );
}
