import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type RadioGroupProps = ComponentPropsWithoutRef<"fieldset">;

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return <fieldset className={cn("grid gap-2.5", className)} {...props} />;
}

type RadioGroupItemProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "type"
> & {
  label: string;
};

export function RadioGroupItem({
  className,
  label,
  id,
  ...props
}: RadioGroupItemProps) {
  return (
    <label
      htmlFor={id}
      className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl border border-line/75 bg-white/70 px-3 py-2.5 text-sm text-ink transition-colors duration-premium ease-premium hover:border-brand-blue/25"
    >
      <input
        id={id}
        type="radio"
        className={cn(
          "h-4 w-4 border border-line accent-[hsl(var(--brand-blue-deep))]",
          className,
        )}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}
