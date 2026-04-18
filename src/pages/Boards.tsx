import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { BoardsGrid } from "@/components/boards/BoardsGrid";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useBoards } from "@/hooks/useBoards";
import { AlertCircle, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = ["Group", "Secret"] as const;

const Boards = () => {
  const { data: boards, isLoading, isError, error, refetch } = useBoards();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Force dark theme just for this page (Pinterest-style night UI).
  useEffect(() => {
    const root = document.documentElement;
    const had = root.classList.contains("dark");
    root.classList.add("dark");
    return () => {
      if (!had) root.classList.remove("dark");
    };
  }, []);

  const filtered = useMemo(() => boards ?? [], [boards]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-10">
        {/* Title */}
        <section className="mb-8">
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Your saved ideas
          </h1>
        </section>

        {/* Filter row */}
        <div className="mb-8 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full border border-border/60"
            aria-label="Filter"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
          {FILTERS.map((f) => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(active ? null : f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-border/60 bg-transparent text-foreground hover:border-foreground/60",
                )}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                <Skeleton className="mt-3 h-4 w-2/3" />
                <Skeleton className="mt-2 h-3 w-1/3" />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <AlertCircle className="h-10 w-10 text-destructive" />
            <p className="mt-4 font-display text-xl">Couldn't load your boards</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {(error as Error)?.message ?? "Please check your connection and try again."}
            </p>
            <Button onClick={() => refetch()} variant="outline" className="mt-6">
              Try again
            </Button>
          </div>
        )}

        {/* Grid */}
        {!isLoading && !isError && <BoardsGrid boards={filtered} />}
      </main>
    </div>
  );
};

export default Boards;
