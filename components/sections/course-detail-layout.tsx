import Link from "next/link";

import { ContentBand } from "@/components/primitives/content-band";
import { PageContainer } from "@/components/primitives/page-container";
import { PremiumButton } from "@/components/primitives/premium-button";
import { SectionContainer } from "@/components/primitives/section-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type CourseDetail } from "@/lib/data/courses";

type CourseDetailLayoutProps = {
  course: CourseDetail;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-xl border border-border/70 bg-white px-4 py-3 text-sm leading-6 text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CourseDetailLayout({ course }: CourseDetailLayoutProps) {
  return (
    <SectionContainer className="pt-0">
      <PageContainer className="space-y-6">
        <div className="grid gap-5 lg:grid-cols-3">
          <ContentBand className="lg:col-span-1">
            <Card className="border-none bg-transparent p-0 shadow-none ring-0">
              <CardHeader>
                <CardTitle>Who this course is for</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <BulletList items={course.whoFor} />
              </CardContent>
            </Card>
          </ContentBand>
          <ContentBand className="lg:col-span-2">
            <Card className="border-none bg-transparent p-0 shadow-none ring-0">
              <CardHeader>
                <CardTitle>What students learn</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <BulletList items={course.learn} />
              </CardContent>
            </Card>
          </ContentBand>
        </div>

        <ContentBand>
          <Card className="border-none bg-transparent p-0 shadow-none ring-0">
            <CardHeader>
              <CardTitle>Course outcomes</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <BulletList items={course.outcomes} />
            </CardContent>
          </Card>
        </ContentBand>

        <ContentBand className="border-primary/20 bg-primary p-7 text-primary-foreground shadow-[0_30px_90px_-55px_rgba(7,45,32,0.9)] sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to discuss this course?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/88 sm:text-base">
            Speak with TOJ Security Training to confirm the right pathway and
            plan your next step with confidence.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PremiumButton
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Enquire Now
            </PremiumButton>
            <PremiumButton
              nativeButton={false}
              tone="secondary"
              className="border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={<Link href="/courses" />}
            >
              View All Courses
            </PremiumButton>
          </div>
        </ContentBand>
      </PageContainer>
    </SectionContainer>
  );
}
