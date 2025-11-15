import { CustomIcon, PythonIcon } from "@/components/Atoms/Icons/CustomIcon";
import { HeroIcon } from "@/components/Atoms/Icons/HeroIcon";
import { FileActionsPopover } from "@/components/Molecules/Popover/FileActionsPopover";
import { stripFileName } from "@/Hooks/Logic/Playground/playgroundFileUtils";
import { FileWrapper } from "./FileWrapper";
import { FileInfoRow } from "@/components/Molecules/FilePreview/FileInfoRow";
import { FileActionsButton } from "@/components/Molecules/Popover/FileActionsButton";

type TreeFileProps = {
  fileName: string;
  fileType: "Python";
  index: number;
  isSelected: boolean;
  deleteFile: (path: string) => void;
  renameFile: (path: string) => void;
  onClick: () => void;
};

export function TreeFile({
  fileName,
  renameFile,
  deleteFile,
  isSelected,
  onClick,
}: TreeFileProps) {
  return (
    <FileWrapper isSelected={isSelected} onClick={() => onClick()}>
      <FileInfoRow fileName={fileName}>
        <CustomIcon color="white" className="h-4" iconName="Python" />
      </FileInfoRow>
      <FileActionsButton
        fileName={fileName}
        deleteFile={deleteFile}
        renameFile={renameFile}
      />
    </FileWrapper>
  );
}
