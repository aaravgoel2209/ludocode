import { FileWrapper } from "@/features/Playground/FileTree/FileWrapper";
import { FileActionsPopover } from "./FileActionsPopover";
import { HeroIcon } from "@/components/Atoms/Icons/HeroIcon";

type FileActionsButtonProps = {
  fileName: string;
  deleteFile: (path: string) => void;
  renameFile: (newName: string) => void;
};

export function FileActionsButton({
  fileName,
  deleteFile,
  renameFile,
}: FileActionsButtonProps) {
  return (
    <FileActionsPopover
      renameItem={renameFile}
      deleteItem={() => deleteFile(fileName)}
      targetId={fileName}
      targetName={fileName}
    >
      <div className="p-1 rounded-full hover:cursor-pointer hover:bg-ludoLightPurple/80">
        <HeroIcon className="h-4" iconName="EllipsisVerticalIcon" />
      </div>
    </FileActionsPopover>
  );
}
