import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants/site";

export function ContactCtaSection() {
  return (
    <SectionShell id="contact" className="pb-20">
      <Container>
        <div className="grid gap-8 rounded-2xl border border-primary/20 bg-primary p-7 text-primary-foreground shadow-md sm:p-10 lg:grid-cols-2">
          <div className="space-y-5">
            <Badge className="w-fit rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
              Contact TOJ Security Training
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Plan your next training step with confidence.
            </h2>
            <p className="max-w-md text-sm leading-7 text-primary-foreground/85 sm:text-base">
              Speak with our team to compare courses, discuss availability, and
              identify the best route for individual or team training.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/90">
              <p>{siteConfig.contact.phonePrimary}</p>
              <p>{siteConfig.contact.phoneSecondary}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>

          <form className="rounded-xl border border-primary-foreground/20 bg-white/96 p-5 text-foreground shadow-sm sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <Input placeholder="Full name" aria-label="Full name" />
              <Input
                placeholder="Phone number"
                aria-label="Phone number"
                type="tel"
              />
            </div>
            <Input
              className="mt-3"
              placeholder="Email address"
              aria-label="Email address"
              type="email"
            />
            <Textarea
              className="mt-3 min-h-28"
              placeholder="Tell us which training you need"
              aria-label="Training enquiry"
            />
            <Button className="mt-4 w-full">Submit Enquiry</Button>
          </form>
        </div>
      </Container>
    </SectionShell>
  );
}
