import type { ProjectFile } from "@/Hooks/Logic/Playground/useProject.tsx";
import { ProjectWinbar } from "../ProjectWinbar.tsx";
import { stripFileName } from "@/Hooks/Logic/Playground/playgroundFileUtils.ts";
import { EditorTab } from "@/components/Atoms/Tab/EditorTab.tsx";

type EditorWinbarProps = { current: number; files: ProjectFile[] };

export function EditorWinbar({ current, files }: EditorWinbarProps) {
  return (
    <ProjectWinbar>
      <div className="flex h-full pt-2 px-6 items-center">
        {current !== null && current !== undefined && (
          <EditorTab>
            <p>{stripFileName(files[current].path)}</p>
          </EditorTab>
        )}
      </div>
    </ProjectWinbar>
  );
}
