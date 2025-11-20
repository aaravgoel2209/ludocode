import { NewFilePopover } from "@/components/Molecules/Popover/NewFilePopover";
import { ProjectWinbar } from "../ProjectWinbar";
import type { ProjectFileChoice } from "@/Hooks/Logic/Playground/useProject";
import type { LanguageType } from "@/Types/Playground/LanguageType";
import { CircleIconButton } from "@/components/Atoms/Button/CircleIconButton";

type FileTreeWinbarProps = {
  addFileChoices: ProjectFileChoice[];
  addFile: (lang: LanguageType, base?: string) => void;
};

export function FileTreeWinbar({
  addFileChoices,
  addFile,
}: FileTreeWinbarProps) {
  return (
    <ProjectWinbar>
      <div className="flex h-full text-white justify-between items-center">
        <p>Files</p>
        <NewFilePopover content={addFileChoices} addFile={addFile}>
            <CircleIconButton iconName="PlusIcon" />
        </NewFilePopover>
      </div>
    </ProjectWinbar>
  );
}
