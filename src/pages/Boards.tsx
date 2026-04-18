import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { BoardsGrid } from "@/components/boards/BoardsGrid";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useBoards } from "@/hooks/useBoards";
import { AlertCircle, SlidersHorizontal, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "Pins" | "Boards" | "Collages";
const TABS: Tab[] = ["Pins", "Boards", "Collages"];
const FILTERS = ["Group", "Secret"] as const;

const Boards = () => {
  const { data: boards, isLoading, isError, error, refetch } = useBoards();
  const [activeTab, setActiveTab] = useState<Tab>("Boards");
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
        {/* Title + profile row */}
        <section className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Your saved ideas
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-muted ring-2 ring-border">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=70"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold text-foreground">Morticia</p>
              <p className="max-w-xs truncate text-xs text-muted-foreground">
                You don't know me, you just know a part of me
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                10 followers · 66 following
              </p>
            </div>
            <Button
              variant="secondary"
              className="ml-2 shrink-0 rounded-full bg-secondary px-5 text-sm font-medium hover:bg-secondary/80"
            >
              Share profile
            </Button>
          </div>
        </section>

        {/* Tabs row */}
        <div className="mb-6 flex items-center gap-8 border-b border-border/40">
          {TABS.map((t) => {
            const active = activeTab === t;
            return (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={cn(
                  "relative pb-3 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Filter row */}
        <div className="mb-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
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

          <Button className="rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90">
            <Plus className="mr-1 h-4 w-4" /> Create
          </Button>
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
