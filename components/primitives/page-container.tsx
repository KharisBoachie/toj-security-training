import { type ComponentPropsWithoutRef } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PageContainerProps = ComponentPropsWithoutRef<"div">;

export function PageContainer({ className, ...props }: PageContainerProps) {
  return (
    <Container
      className={cn("w-full px-5 sm:px-8 lg:px-10 xl:px-12", className)}
      {...props}
    />
  );
}
