import { type ComponentPropsWithoutRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PremiumButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  tone?: "primary" | "secondary";
  compact?: boolean;
};

export function PremiumButton({
  className,
  tone = "primary",
  compact = false,
  size,
  ...props
}: PremiumButtonProps) {
  const sizingClass = size
    ? ""
    : compact
      ? "h-10 px-4 text-sm"
      : "h-11 px-6 text-sm";

  return (
    <Button
      className={cn(
        "rounded-full font-medium transition-all duration-premium ease-premium hover:-translate-y-0.5",
        sizingClass,
        tone === "primary"
          ? "bg-primary text-primary-foreground shadow-[0_16px_40px_-28px_rgba(8,40,28,0.75)] hover:shadow-[0_20px_48px_-28px_rgba(8,40,28,0.8)]"
          : "border-border/80 bg-background text-foreground hover:bg-muted/70",
        className,
      )}
      size={size}
      {...props}
    />
  );
}
