import { useQuery, useQueryClient } from "@tanstack/react-query";
import { lessonBatcher, moduleBatcher } from "./Batcher/batchers";
import { qk } from "../../constants/qk";

export function useModule(moduleId: string) {
    const qc = useQueryClient();

    return useQuery({
        queryKey: qk.module(moduleId),
        queryFn: () => moduleBatcher.fetch(moduleId!),
        staleTime: 60_000,
        initialData: () => qc.getQueryData(qk.module(moduleId))
    })

}