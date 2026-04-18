import { cn } from "@/lib/utils";

interface StyleFilterProps {
  styles: string[];
  active: string;
  onChange: (style: string) => void;
}

export const StyleFilter = ({ styles, active, onChange }: StyleFilterProps) => {
  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
      {styles.map((s) => {
        const isActive = active === s;
        return (
          <button
            key={s}
            onClick={() => onChange(s)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.15em] transition-all",
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background text-foreground/70 hover:border-foreground hover:text-foreground",
            )}
          >
            {s}
          </button>
        );
      })}
    </div>
  );
};
