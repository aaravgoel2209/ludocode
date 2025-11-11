import { useEffect, useState, type RefObject } from "react";
import { ProjectEditor } from "./Editor/ProjectEditor";
import { ProjectFileTree } from "./FileTree/ProjectFileTree";
import { useProject } from "@/Hooks/Logic/Playground/useProject";
import * as monaco from "monaco-editor";

type ProjectPageProps = {};


export function ProjectPage({}: ProjectPageProps) {
  const { files, current, active, setCurrent, updateContent } = useProject();

  return (
    <div className="grid col-span-full h-full grid-cols-12">
      <div className="col-span-1 px-6 py-4 bg-ludoGrayDark border-r-2 border-r-ludoGrayLight lg:col-span-3">
        <ProjectFileTree
          projects={files}
          current={current}
          changeFile={setCurrent}
        />
      </div>

      <div className="col-span-10 lg:col-span-7 flex flex-col gap-8 items-stretch justify-start min-w-0">
        <ProjectEditor
          path={active.path}
          language={active.language}
          value={active.content}
          onChange={updateContent}
        />
      </div>

      <div className="col-span-1 bg-ludoGrayLight lg:col-span-2" />
    </div>
  );
}
