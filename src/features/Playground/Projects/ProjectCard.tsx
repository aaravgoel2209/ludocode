import { PythonIcon } from "@/components/Atoms/Icons/CustomIcon";
import { ludoNavigation } from "@/routes/ludoNavigation";
import { router } from "@/routes/router";
import type { ProjectSnapshot } from "@/Types/Playground/ProjectSnapshot";

type ProjectCardProps = { project: ProjectSnapshot };

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      onClick={() =>
        router.navigate(ludoNavigation.playground.toProject(project.projectId))
      }
      className="w-full hover:cursor-pointer flex justify-between border-ludoLightPurple border p-4 rounded-xl bg-ludoGrayLight"
    >
      <div className="flex flex-col">
        <div className="w-full items-center pb-1 text-white flex gap-2">
          <p>Project - {project.projectLanguage}</p>
          <PythonIcon color="white" className="h-4" />
        </div>
        <h4 className="text-white text-lg font-bold">{project.projectName}</h4>
      </div>
    </div>
  );
}
