import { type ComponentPropsWithoutRef } from "react";

import { SectionShell } from "@/components/layout/section-shell";
import { cn } from "@/lib/utils";

type SectionContainerProps = ComponentPropsWithoutRef<"section">;

export function SectionContainer({
  className,
  ...props
}: SectionContainerProps) {
  return <SectionShell className={cn(className)} {...props} />;
}
