import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/layout/site-shell";
import { CourseDetailLayout } from "@/components/sections/course-detail-layout";
import { CourseFaqBlock } from "@/components/sections/course-faq-block";
import { PageHero } from "@/components/sections/page-hero";
import { courseDetails, getCourseBySlug } from "@/lib/data/courses";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courseDetails.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course",
    };
  }

  return {
    title: course.title,
    description: course.summary,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow={course.group}
        title={course.title}
        description={course.heroDescription}
      />
      <CourseDetailLayout course={course} />
      <CourseFaqBlock faqs={course.faqs} />
    </SiteShell>
  );
}
