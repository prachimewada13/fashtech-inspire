import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { mockBoards } from "@/lib/mockBoards";
import type { Board } from "@/types/board";

const fetchBoards = async (): Promise<Board[]> => {
  try {
    const { data } = await api.get<Board[] | { boards: Board[] }>("/boards");
    const boards = Array.isArray(data) ? data : data.boards ?? [];
    // If backend has no boards yet, show mock data so the layout is visible.
    if (boards.length === 0) {
      console.info("[useBoards] Backend returned 0 boards — showing mock data for preview.");
      return mockBoards;
    }
    return boards;
  } catch (err) {
    // Backend unreachable (e.g. localhost not visible from preview) — fall back to mocks.
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
