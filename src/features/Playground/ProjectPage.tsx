import { useEffect, useState } from "react";
import { ProjectEditor } from "./Editor/ProjectEditor";
import { ProjectFileTree } from "./FileTree/ProjectFileTree";
import { useProject } from "@/Hooks/Logic/Playground/useProject";

type ProjectPageProps = {};

export type ProjectFile = {
  fileName: string;
  fileType: ".py";
};

export function ProjectPage({}: ProjectPageProps) {

  const {files, currentFileIdx, changeFile} = useProject()

  return (
    <div className="grid col-span-full h-full grid-cols-12">
      <div className="col-span-1 px-6 py-4 bg-ludoGrayDark border-r-2 border-r-ludoGrayLight lg:col-span-3">
        <ProjectFileTree changeFile={changeFile} current={currentFileIdx} projects={files} />
      </div>

      <div className="col-span-10 lg:col-span-7 flex flex-col gap-8 items-stretch justify-start min-w-0">
        <ProjectEditor />
      </div>

      <div className="col-span-1 bg-ludoGrayLight lg:col-span-2" />
    </div>
  );
}
