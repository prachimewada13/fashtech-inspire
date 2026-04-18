import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { BoardsGrid } from "@/components/boards/BoardsGrid";
import { StyleFilter } from "@/components/boards/StyleFilter";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useBoards } from "@/hooks/useBoards";
import { Plus, AlertCircle } from "lucide-react";

const ALL = "All";

const Boards = () => {
  const { data: boards, isLoading, isError, error, refetch } = useBoards();
  const [activeStyle, setActiveStyle] = useState<string>(ALL);

  const styles = useMemo(() => {
    const set = new Set<string>();
    boards?.forEach((b) => b.style && set.add(b.style));
    return [ALL, ...Array.from(set).sort()];
  }, [boards]);

  const filtered = useMemo(() => {
    if (!boards) return [];
    return activeStyle === ALL
      ? boards
      : boards.filter((b) => b.style?.toLowerCase() === activeStyle.toLowerCase());
  }, [boards, activeStyle]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-10">
        {/* Editorial header */}
        <section className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Inspire</p>
            <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Your boards
            </h1>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Curated moodboards across every aesthetic — goth, streetwear, minimal, y2k. Pin looks, build a vibe, wear the story.
            </p>
          </div>
          <Button size="lg" className="gap-2 self-start">
            <Plus className="h-4 w-4" /> New board
          </Button>
        </section>

        {/* Style filters */}
        {!isLoading && !isError && boards && boards.length > 0 && (
          <div className="mb-8">
            <StyleFilter styles={styles} active={activeStyle} onChange={setActiveStyle} />
          </div>
        )}

        {/* Loading */}
        {isLoading && (
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4 xl:columns-5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="mb-4 break-inside-avoid">
                <Skeleton className={`w-full rounded-2xl ${i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-72"}`} />
                <Skeleton className="mt-3 h-4 w-3/4" />
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
