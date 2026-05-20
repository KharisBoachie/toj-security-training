"use client";

import Link from "next/link";
import { ArrowRight, CalendarClock, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trustIndicators } from "@/lib/data/home";

export function HeroSection() {
  return (
    <SectionShell className="pb-10 pt-12 sm:pt-16 lg:pt-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-7">
            <Badge className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
              UK Professional Training Provider
            </Badge>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Security and workplace training built for real professional
                progression.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                TOJ Security Training delivers structured SIA and compliance-led
                courses with practical instruction, clear standards, and support
                that helps learners and employers move forward confidently.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-11 px-6 font-semibold shadow-sm transition hover:shadow-md"
                render={<Link href="#courses" />}
              >
                Explore Courses
                <ArrowRight />
              </Button>
              <Dialog>
                <DialogTrigger
                  render={
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-11 px-6 font-semibold"
                    />
                  }
                >
                  Request Guidance
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Speak with TOJ Admissions</DialogTitle>
                    <DialogDescription>
                      Share your goals and our team will help you identify the
                      right course path.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3">
                    <Input placeholder="Full name" aria-label="Full name" />
                    <Input
                      placeholder="Email address"
                      type="email"
                      aria-label="Email address"
                    />
                    <Textarea
                      placeholder="Tell us which course interests you"
                      aria-label="Course enquiry"
                    />
                  </div>
                  <DialogFooter>
                    <Button className="w-full">Submit enquiry</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="relative rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground">
              <CalendarClock className="size-4 text-primary" />
              Next course intakes available
            </div>
            <ul className="space-y-4">
              {trustIndicators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 text-primary" />
                  <span className="text-sm leading-6 text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-border/70 bg-muted/40 p-4">
              <p className="text-sm font-semibold text-foreground">
                Designed for individual learners and employer teams
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
