import { useQuery, useQueryClient } from "@tanstack/react-query";
import { userBatcher } from "./Batcher/batchers";
import { qk } from "../../constants/qk";

export function useUser(id: string) {
  const qc = useQueryClient();

  return useQuery({
    queryKey: qk.user(id),
    queryFn: () => userBatcher.fetch(id!),
    initialData: () => qc.getQueryData(qk.user(id)),
    staleTime: 60_000,
  });
}