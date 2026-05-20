import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { ContentBand } from "@/components/primitives/content-band";
import { PageContainer } from "@/components/primitives/page-container";
import { PremiumButton } from "@/components/primitives/premium-button";
import { SectionContainer } from "@/components/primitives/section-container";
import { PageHero } from "@/components/sections/page-hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TOJ Security Training for course guidance, employer bookings, and training enquiries.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Speak with TOJ Security Training"
        description="Discuss course pathways, employer training requirements, and next steps with our admissions team."
      />

      <SectionContainer className="pt-0">
        <PageContainer className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
          <ContentBand>
            <Card className="border-none bg-transparent p-0 shadow-none ring-0">
              <CardHeader>
                <CardTitle>Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-0 text-sm text-muted-foreground copy-rhythm sm:text-base">
                <p>{siteConfig.contact.address}</p>
                <p>{siteConfig.contact.phonePrimary}</p>
                <p>{siteConfig.contact.phoneSecondary}</p>
                <p>{siteConfig.contact.email}</p>
              </CardContent>
            </Card>
          </ContentBand>

          <ContentBand>
            <Card className="border-none bg-transparent p-0 shadow-none ring-0">
              <CardHeader className="space-y-3">
                <CardTitle>Enquiry form</CardTitle>
                <Badge className="w-fit rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-primary">
                  UI only for now
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <form className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input placeholder="Full name" aria-label="Full name" />
                    <Input
                      placeholder="Phone number"
                      aria-label="Phone number"
                    />
                  </div>
                  <Input
                    placeholder="Email address"
                    type="email"
                    aria-label="Email address"
                  />
                  <Textarea
                    className="min-h-32"
                    placeholder="Tell us what training you need"
                    aria-label="Training enquiry"
                  />
                  <p className="text-xs leading-6 text-muted-foreground">
                    This enquiry form is currently interface-only and not
                    connected to a submission backend yet.
                  </p>
                  <PremiumButton className="w-full">Submit Enquiry</PremiumButton>
                </form>
              </CardContent>
            </Card>
          </ContentBand>
        </PageContainer>
      </SectionContainer>
    </SiteShell>
  );
}
