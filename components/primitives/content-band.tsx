import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ContentBandProps = ComponentPropsWithoutRef<"div">;

export function ContentBand({ className, ...props }: ContentBandProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/70 bg-card/90 backdrop-blur-sm shadow-[0_30px_85px_-58px_rgba(11,38,28,0.62)] transition-all duration-300",
        className,
      )}
      {...props}
    />
  );
}
