import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full px-5 sm:px-8 lg:px-10 xl:px-12",
        className,
      )}
      {...props}
    />
  );
}
