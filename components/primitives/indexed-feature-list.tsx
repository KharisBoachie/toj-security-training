import { cn } from "@/lib/utils";

type IndexedFeature = {
  title: string;
  description: string;
};

type IndexedFeatureListProps = {
  items: readonly IndexedFeature[];
  className?: string;
};

export function IndexedFeatureList({ items, className }: IndexedFeatureListProps) {
  return (
    <div className={cn("divide-y divide-line/80", className)}>
      {items.map((item, index) => (
        <div key={item.title} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-4">
          <p className="font-mono text-sm tracking-[0.14em] text-primary/82">
            {String(index + 1).padStart(2, "0")}
          </p>
          <div className="space-y-1.5">
            <h4 className="text-base font-semibold tracking-[-0.02em] text-ink">
              {item.title}
            </h4>
            <p className="text-sm leading-7 text-ink-muted">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
