import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { mockBoards, type MockBoard } from "@/lib/mockBoards";
import type { Board } from "@/types/board";

const PLACEHOLDER_COVERS = [
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&auto=format&fit=crop&q=70",
];

const formatPins = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k Pins` : `${n} Pins`;

/** Enrich a backend Board with the display fields the UI expects. */
const enrich = (b: Board): MockBoard => ({
  ...b,
  pinsLabel: formatPins(b.outfitCount ?? 0),
  updatedLabel: "recent",
  covers: b.coverImage
    ? [b.coverImage, ...PLACEHOLDER_COVERS].slice(0, 4)
    : PLACEHOLDER_COVERS,
});

const fetchBoards = async (): Promise<MockBoard[]> => {
  try {
    const { data } = await api.get<Board[] | { boards: Board[] }>("/boards");
    const boards = Array.isArray(data) ? data : data.boards ?? [];
    if (boards.length === 0) {
      console.info("[useBoards] Backend returned 0 boards — showing mock data for preview.");
      return mockBoards;
    }
    return boards.map(enrich);
  } catch (err) {
    console.warn("[useBoards] API unreachable, using mock boards:", err);
    return mockBoards;
  }
};

export const useBoards = () =>
  useQuery({
    queryKey: ["boards"],
    queryFn: fetchBoards,
    staleTime: 30_000,
    retry: false,
  });
