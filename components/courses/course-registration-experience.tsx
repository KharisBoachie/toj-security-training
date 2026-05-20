"use client";

import { useMemo, useState } from "react";

import { ContactFallbackPanel } from "@/components/courses/contact-fallback-panel";
import { CourseGroup } from "@/components/courses/course-group";
import { CourseRegistrationIntro } from "@/components/courses/course-registration-intro";
import { CourseRegistrationModal } from "@/components/courses/course-registration-modal";
import { PageContainer } from "@/components/primitives/page-container";
import { SectionContainer } from "@/components/primitives/section-container";
import {
  courseRegistrationCategories,
  type CourseOption,
} from "@/lib/data/courses";

export function CourseRegistrationExperience() {
  const [activeCourse, setActiveCourse] = useState<CourseOption | null>(null);

  const categories = useMemo(() => courseRegistrationCategories, []);

  return (
    <SectionContainer className="relative overflow-hidden bg-[linear-gradient(145deg,#f7faf6_0%,#f4f8f3_42%,#f6f8f3_100%)] pt-10 sm:pt-14 lg:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_14%,hsl(var(--brand-blue)/0.11),transparent_38%),radial-gradient(circle_at_88%_88%,rgba(227,202,154,0.18),transparent_34%)]"
      />

      <PageContainer className="relative z-10 section-rhythm">
        <CourseRegistrationIntro />

        {categories.map((category) => (
          <CourseGroup
            key={category.id}
            category={category}
            onRegister={setActiveCourse}
          />
        ))}

        <ContactFallbackPanel />
      </PageContainer>

      {activeCourse ? (
        <CourseRegistrationModal
          key={activeCourse.id}
          course={activeCourse}
          onOpenChange={(open) => {
            if (!open) setActiveCourse(null);
          }}
        />
      ) : null}
    </SectionContainer>
  );
}
