import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { CourseRegistrationExperience } from "@/components/courses/course-registration-experience";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore SIA security courses, English preparation, and professional short courses from TOJ Security Training.",
};

export default function CoursesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Courses"
        title="Professional training pathways for security and workplace development."
        description="Browse TOJ Security Training courses across SIA pathways, English preparation, and targeted short professional modules."
        backgroundImage="/images/toj-courses-hero-bg.png"
        variant="immersive"
      />
      <CourseRegistrationExperience />
    </SiteShell>
  );
}
