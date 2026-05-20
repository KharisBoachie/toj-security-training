import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

type SectionShellProps = ComponentPropsWithoutRef<"section"> & {
  id?: string;
};

export function SectionShell({ className, ...props }: SectionShellProps) {
  return (
    <section
      className={cn("section-space scroll-mt-28", className)}
      {...props}
    />
  );
}
