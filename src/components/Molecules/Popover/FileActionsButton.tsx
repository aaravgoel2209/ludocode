import { FileWrapper } from "@/features/Playground/FileTree/FileWrapper";
import { FileActionsPopover } from "./FileActionsPopover";
import { HeroIcon } from "@/components/Atoms/Icons/HeroIcon";

type FileActionsButtonProps = {
  fileName: string;
  deleteFile: (path: string) => void;
  renameFile: (newName: string) => void;
  variant?: "main" | "secondary"
};

export function FileActionsButton({
  fileName,
  deleteFile,
  renameFile,
  variant = "main"
}: FileActionsButtonProps) {

  const style = {
    main: "p-1 rounded-full hover:cursor-pointer hover:bg-ludoLightPurple/80",
    secondary: "hover:cursor-pointer hover:text-ludoLightPurple"
  }

  return (
    <FileActionsPopover
      renameItem={renameFile}
      deleteItem={() => deleteFile(fileName)}
      targetId={fileName}
      targetName={fileName}
    >
      <div onClick={(e) => e.stopPropagation()} className={style[variant]}>
        <HeroIcon className="h-4" iconName="EllipsisVerticalIcon" />
      </div>
    </FileActionsPopover>
  );
}
