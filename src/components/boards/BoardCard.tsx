import { Link } from "react-router-dom";
import type { Board } from "@/types/board";
import { cn } from "@/lib/utils";

interface BoardCardProps {
  board: Board;
  /** Pinterest-style staggered heights */
  heightClass?: string;
}

export const BoardCard = ({ board, heightClass = "h-72" }: BoardCardProps) => {
  return (
    <Link
      to={`/boards/${board.id}`}
      className="group mb-4 block break-inside-avoid"
    >
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl bg-muted shadow-card transition-all duration-500 group-hover:shadow-editorial",
          heightClass,
        )}
      >
        {board.coverImage ? (
          <img
            src={board.coverImage}
            alt={board.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-blush">
            <span className="font-display text-2xl text-ink/40">
              {board.name}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-foreground backdrop-blur">
          {board.style}
        </span>

        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs text-background/80">
            {board.outfitCount} {board.outfitCount === 1 ? "outfit" : "outfits"}
          </p>
        </div>
      </div>

      <div className="mt-3 px-1">
        <h3 className="font-display text-lg leading-tight text-foreground">
          {board.name}
        </h3>
        {board.description && (
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {board.description}
          </p>
        )}
      </div>
    </Link>
  );
};
