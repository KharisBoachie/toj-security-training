"use client";

import { ContentBand } from "@/components/primitives/content-band";
import { PageContainer } from "@/components/primitives/page-container";
import { SectionContainer } from "@/components/primitives/section-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type CourseFaq } from "@/lib/data/courses";

type CourseFaqBlockProps = {
  faqs: CourseFaq[];
};

export function CourseFaqBlock({ faqs }: CourseFaqBlockProps) {
  return (
    <SectionContainer className="pt-0">
      <PageContainer>
        <ContentBand className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Frequently asked questions
          </h2>
          <Accordion className="mt-5" defaultValue={["item-0"]}>
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
        </ContentBand>
      </PageContainer>
    </SectionContainer>
  );
}
