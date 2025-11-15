import { useEffect, useState, type RefObject } from "react";
import { ProjectEditor } from "./Editor/ProjectEditor.tsx";
import { ProjectFileTree } from "./FileTree/ProjectFileTree.tsx";
import { useProject } from "@/Hooks/Logic/Playground/useProject.tsx";
import * as monaco from "monaco-editor";
import { ProjectWinbar } from "./ProjectWinbar.tsx";
import { NewFilePopover } from "@/components/Molecules/Popover/NewFilePopover.tsx";
import { PlusIcon, TrashIcon } from "lucide-react";
import { stripFileName } from "@/Hooks/Logic/Playground/playgroundFileUtils.ts";
import { useRunner } from "@/Hooks/Logic/Playground/useRunner.tsx";
import { RunnerWinbar } from "./Runner/RunnerWinbar.tsx";
import { EditorWinbar } from "./Editor/EditorWinbar.tsx";
import { useLoaderData } from "@tanstack/react-router";
import { projectRoute, router } from "@/routes/router.tsx";
import { useAutoSaveProject } from "@/Hooks/Logic/Playground/useAutoSaveProject.tsx";
import { ProjectRunner } from "./Runner/ProjectRunner.tsx";
import { MainGridWrapper } from "@/Layouts/LayoutWrappers/MainGridWrapper.tsx";
import { CommonHeader } from "@/components/Molecules/Header/CommonHeader.tsx";
import { HeroIcon } from "@/components/Atoms/Icons/HeroIcon.tsx";
import { HollowSlot } from "@/components/Atoms/Slot/HollowSlot.tsx";
import { ludoNavigation } from "@/routes/ludoNavigation.tsx";
import { SaveStatusIcon } from "./Editor/SaveStatusIcon.tsx";

type ProjectPageProps = {};

export function ProjectPage({}: ProjectPageProps) {
  const { project } = useLoaderData({ from: projectRoute.id });

  const {
    files,
    current,
    active,
    deleteFile,
    setCurrent,
    updateContent,
    addFile,
    addFileChoices,
  } = useProject({ project });

  const { isSaved, isSaving, error, lastSavedAt } = useAutoSaveProject({
    project,
    files,
    debounceMs: 1000,
  });

  const { outputLog, clearOutput, runCode, isRunning } = useRunner({
    project,
    files,
  });

  return (
    <MainGridWrapper gridRows="SITE">
      <CommonHeader device="Desktop">
        <div className="col-span-1 text-white pl-6 lg:col-span-3 flex items-center">
          <HollowSlot
            onClick={() =>
              router.navigate(ludoNavigation.playground.toPlayground())
            }
          >
            <HeroIcon className="h-4" iconName="ArrowLeftIcon" />
          </HollowSlot>
        </div>
        <div className="col-span-10 text-white flex items-center gap-4 justify-center lg:col-span-6 ">
          <h1>{project.projectName}</h1>
          <SaveStatusIcon
            isSaved={isSaved}
            isSaving={isSaving}
            error={error}
            lastSavedAt={lastSavedAt}
          />
        </div>
        <div className="col-span-1 text-white lg:col-span-3"></div>
      </CommonHeader>
      <div className="grid col-span-full h-full grid-cols-12">
        <div className="col-span-1 bg-ludoGrayDark border-r-2 border-r-ludoGrayLight lg:col-span-3">
          <ProjectWinbar>
            <div className="flex h-full text-white justify-between items-center">
              <p>Files</p>

              <NewFilePopover content={addFileChoices} addFile={addFile}>
                <div className="p-0.5 hover:cursor-pointer hover:bg-ludoLightPurple/80 rounded-full">
                  <PlusIcon className="h-4 w-4" />
                </div>
              </NewFilePopover>
            </div>
          </ProjectWinbar>
          <ProjectFileTree
            renameFile={(hello: string) => null}
            projects={files}
            current={current}
            changeFile={setCurrent}
            deleteFile={deleteFile}
          />
        </div>

        <div className="col-span-10 relative lg:col-span-6 flex flex-col gap-8 items-stretch justify-start min-w-0">
          <EditorWinbar current={current} files={files} />
          <ProjectEditor
            path={active.path}
            language={active.language}
            value={active.content}
            onChange={updateContent}
          />
          <div
            onClick={() => runCode()}
            className="absolute z-10 hover:cursor-pointer rounded-lg py-0.5 px-8 border-ludoLightPurple border-2 text-ludoLightPurple bottom-10 right-10 flex items-center justify-center"
          >
            <p className="font-bold text-lg">Run</p>
          </div>
        </div>

        <div className="col-span-1 border-l-2 border-l-ludoGrayLight bg-ludoGrayDark lg:col-span-3">
          <RunnerWinbar clearOutput={clearOutput} />
          <ProjectRunner output={outputLog} />
        </div>
      </div>
    </MainGridWrapper>
  );
}
