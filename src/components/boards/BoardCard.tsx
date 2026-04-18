import { Link } from "react-router-dom";
import type { MockBoard } from "@/lib/mockBoards";

interface BoardCardProps {
  board: MockBoard;
}

export const BoardCard = ({ board }: BoardCardProps) => {
  const covers = Array.isArray(board.covers) ? board.covers : [];
  const [c1, c2, c3, c4] = [covers[0], covers[1], covers[2], covers[3]];

  return (
    <Link to={`/boards/${board.id}`} className="group block">
      {/* Pinterest-style collage: 1 large left + 2 small right + 1 wide bottom-right */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5">
        <div className="grid h-full grid-cols-3 grid-rows-2 gap-1">
          <div className="col-span-2 row-span-2 overflow-hidden">
            {c1 && (
              <img
                src={c1}
                alt={board.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            {c2 && (
              <img
                src={c2}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            {c3 && (
              <img
                src={c3}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </div>
        </div>

        {/* hover tint */}
        <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
        {/* unused fourth cover kept for richer collages on larger cards */}
        {c4 && <span className="hidden">{c4}</span>}
      </div>

      <div className="mt-3 px-1">
        <h3 className="truncate font-display text-xl font-semibold leading-tight text-foreground">
          {board.name}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {board.pinsLabel} <span className="mx-1.5">·</span> {board.updatedLabel}
        </p>
      </div>
    </Link>
  );
};
