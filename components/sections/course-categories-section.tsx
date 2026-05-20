import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseCategories } from "@/lib/data/home";

export function CourseCategoriesSection() {
  return (
    <SectionShell id="courses" className="bg-muted/20">
      <Container className="space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Course Categories
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Professional pathways for security and workplace development.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courseCategories.map((course) => (
            <Card
              key={course.title}
              className="group border-border/80 bg-card transition-all duration-300 hover:border-primary/35 hover:shadow-md"
            >
              <CardHeader>
                <course.icon className="size-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="text-lg">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {course.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
