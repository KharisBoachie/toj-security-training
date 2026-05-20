import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = ComponentPropsWithoutRef<"div"> & {
  eyebrow?: string;
  title: string;
  description?: string;
  titleAs?: "h1" | "h2" | "h3";
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleAs = "h2",
  titleClassName,
  descriptionClassName,
  className,
  ...props
}: SectionHeadingProps) {
  const HeadingTag = titleAs;

  return (
    <div className={cn("space-y-5", className)} {...props}>
      {eyebrow ? (
        <p className="text-eyebrow text-primary">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        className={cn(
          "max-w-4xl text-balance text-heading-md text-foreground",
          titleClassName,
        )}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "max-w-prose text-body text-muted-foreground",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
