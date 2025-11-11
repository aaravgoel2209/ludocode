import type { ProjectFile } from "../ProjectPage";
import { TreeFile } from "./TreeFile";

type ProjectFileTreeProps = { projects: ProjectFile[]; current: number, changeFile: (index: number) => void; };

export function ProjectFileTree({ projects, current, changeFile }: ProjectFileTreeProps) {
  return (
    <div className="flex bg-ludoGrayDark gap-2 text-white flex-col w-full">
      {projects.map((project, index) => (
        <TreeFile
          onClick={() => changeFile(index)}
          fileName={project.fileName}
          fileType="Python"
          index={index}
          isSelected={current == index}
        />
      ))}
    </div>
  );
}
