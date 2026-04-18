import type { MockBoard } from "@/lib/mockBoards";
import { BoardCard } from "./BoardCard";

interface BoardsGridProps {
  boards: MockBoard[];
}

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
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {boards.map((b) => (
        <BoardCard key={b.id} board={b} />
      ))}
    </div>
  );
};
