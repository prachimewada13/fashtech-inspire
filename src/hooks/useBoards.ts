import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import type { Board } from "@/types/board";

const fetchBoards = async (): Promise<Board[]> => {
  const { data } = await api.get<Board[] | { boards: Board[] }>("/boards");
  // Support both { boards: [...] } and [...] response shapes.
  return Array.isArray(data) ? data : data.boards ?? [];
};

export const useBoards = () =>
  useQuery({
    queryKey: ["boards"],
    queryFn: fetchBoards,
    staleTime: 30_000,
  });
