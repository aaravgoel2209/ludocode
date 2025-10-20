import { useQuery, useQueryClient } from "@tanstack/react-query";
import { qk } from "../../constants/qk";
import { lessonBatcher } from "./Batcher/batchers";

export function useLesson(lessonId: string) {
    const qc = useQueryClient();

    return useQuery({
        queryKey: qk.lesson(lessonId),
        queryFn: () => lessonBatcher.fetch(lessonId!),
        staleTime: 60_000,
        initialData: () => qc.getQueryData(qk.lesson(lessonId))
    })

}