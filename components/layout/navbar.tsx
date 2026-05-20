"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/lib/constants/navigation";

function BrandMark() {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-base font-semibold text-primary-foreground shadow-sm">
        TOJ
      </span>
      <span className="text-sm font-semibold tracking-wide text-foreground sm:text-base">
        TOJ Security Training
      </span>
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/85">
      <Container className="flex h-18 items-center justify-between">
        <BrandMark />

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            className="px-5 text-sm shadow-sm transition hover:shadow-md"
            render={<Link href="#contact" />}
          >
            Speak with Admissions
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[86%] border-border/80 p-0">
            <SheetHeader className="border-b border-border/70 px-6 py-5">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
                Browse courses, support, and contact options.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2 px-4 py-5">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="mt-3 w-full justify-center"
                render={<Link href="#contact" />}
              >
                Speak with Admissions
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
