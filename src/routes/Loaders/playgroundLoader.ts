import { qo } from "@/Hooks/Queries/Definitions/queries";
import type { ProjectListResponse } from "@/Types/Playground/ProjectListResponse";
import type { ProjectSnapshot } from "@/Types/Playground/ProjectSnapshot";
import type { QueryClient } from "@tanstack/react-query";

export async function playgroundLoader (queryClient: QueryClient) {

    const projectsPacket = await queryClient.ensureQueryData(qo.allProjects());
    const allProjects = projectsPacket.projects

    return { allProjects };

}