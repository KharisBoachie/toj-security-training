import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import { navigationLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              TOJ Security Training
            </h3>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              Professional security, compliance, and workplace training designed
              for learners and employers across the UK.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/80">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{siteConfig.contact.address}</li>
              <li>{siteConfig.contact.phonePrimary}</li>
              <li>{siteConfig.contact.phoneSecondary}</li>
              <li>{siteConfig.contact.email}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/80">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} TOJ Security Training. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
