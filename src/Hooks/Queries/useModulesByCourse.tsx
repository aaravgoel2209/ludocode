import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GET_MODULES_BY_COURSE } from "../../constants/apiPaths";
import type { LudoModule } from "../../Types/Catalog/LudoModule";
import { qk } from "../../constants/qk";

export async function fetchModulesByCourse(
  courseId: string
): Promise<LudoModule[]> {
  const res = await fetch(GET_MODULES_BY_COURSE(courseId));
  if (!res.ok) throw new Error("Failed to fetch units");
  return (await res.json()) as LudoModule[];
}

export function useUnitsBySection(id: string) {
  const qc = useQueryClient();

  return useQuery({
    queryKey: qk.modulesBySection(id),
    queryFn: () => fetchModulesByCourse(id),
    initialData: () => qc.getQueryData(qk.modulesBySection(id)),
    staleTime: 60_000,
  });
}