"use client";

import { type CourseCategory, type CourseOption } from "@/lib/data/courses";

import { CourseOptionCard } from "@/components/courses/course-option-card";

type CourseGroupProps = {
  category: CourseCategory;
  onRegister: (course: CourseOption) => void;
};

export function CourseGroup({ category, onRegister }: CourseGroupProps) {
  return (
    <section className="section-rhythm">
      <div className="space-y-3">
        <h2 className="text-heading-md text-ink">{category.title}</h2>
        <p className="max-w-prose text-sm leading-7 text-ink-muted">
          {category.description}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {category.courses.map((course) => (
          <CourseOptionCard key={course.id} course={course} onRegister={onRegister} />
        ))}
      </div>
    </section>
  );
}
