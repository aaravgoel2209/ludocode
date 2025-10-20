import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GET_LESSONS_BY_MODULE } from "../../constants/apiPaths";
import type { LudoLesson } from "../../Types/Catalog/LudoLesson";
import { qk } from "../../constants/qk";

export async function fetchLessonsByModule(
  moduleId: string
): Promise<LudoLesson[]> {
  const res = await fetch(GET_LESSONS_BY_MODULE(moduleId))
  if (!res.ok) throw new Error("Failed to fetch lessons");
  return (await res.json()) as LudoLesson[];
}

export function useLessonsByModule(moduleId: string) {
  const qc = useQueryClient();
  return useQuery({
    queryKey: qk.lessonsByModule(moduleId),
    queryFn: () => fetchLessonsByModule(moduleId),
    initialData: () => qc.getQueryData(qk.lessonsByModule(moduleId)),
    staleTime: 60_000,
  });
}