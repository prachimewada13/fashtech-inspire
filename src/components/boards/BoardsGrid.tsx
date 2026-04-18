import type { Board } from "@/types/board";
import { BoardCard } from "./BoardCard";

interface BoardsGridProps {
  boards: Board[];
}

const heights = ["h-64", "h-80", "h-72", "h-96", "h-60", "h-80", "h-72", "h-64"];

export const BoardsGrid = ({ boards }: BoardsGridProps) => {
  if (boards.length === 0) {
    return (
      <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
        <p className="font-display text-2xl text-foreground">No boards yet</p>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Start curating your first mood — pin outfits, set a vibe, and your boards will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="columns-2 gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
      {boards.map((b, i) => (
        <BoardCard key={b.id} board={b} heightClass={heights[i % heights.length]} />
      ))}
    </div>
  );
};
