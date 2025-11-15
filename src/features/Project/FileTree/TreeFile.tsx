import { CustomIcon } from "@/components/Atoms/Icons/CustomIcon.tsx";
import { FileWrapper } from "../../../components/Molecules/File/FileWrapper.tsx";
import { FileInfoRow } from "@/components/Molecules/File/FileInfoRow.tsx";
import { FileActionsButton } from "@/components/Molecules/Popover/FileActionsButton.tsx";

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
