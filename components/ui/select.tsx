import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  id?: string;
  name?: string;
  value: string;
  options: readonly SelectOption[];
  onValueChange: (value: string) => void;
  className?: string;
};

export function Select({
  id,
  name,
  value,
  options,
  onValueChange,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const selected = options.find((option) => option.value === value);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <input type="hidden" id={id} name={name} value={value} />
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-full items-center justify-between rounded-xl border border-line/85 bg-white/78 px-3 text-left text-sm text-ink outline-none transition-all duration-premium ease-premium focus-visible:border-brand-blue/35 focus-visible:ring-2 focus-visible:ring-ring/40 hover:border-brand-blue/28 hover:bg-white"
      >
        <span>{selected?.label ?? "Select option"}</span>
        <ChevronDown
          className={cn(
            "size-4 text-ink-muted transition-transform duration-premium ease-premium",
            isOpen ? "rotate-180" : "",
          )}
        />
      </button>

      {isOpen ? (
        <div
          role="listbox"
          className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-brand-blue/14 bg-white/95 p-1 shadow-[0_24px_60px_-32px_hsl(var(--wc-shadow-color)/0.42)] backdrop-blur-sm"
        >
          {options.map((option) => {
            const active = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onValueChange(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors duration-premium ease-premium",
                  active
                    ? "bg-brand-blue/12 text-ink"
                    : "text-ink-muted hover:bg-canvas-subtle hover:text-ink",
                )}
              >
                <span>{option.label}</span>
                {active ? <Check className="size-4 text-primary" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
