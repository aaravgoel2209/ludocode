import { FileWrapper } from "@/features/Playground/FileTree/FileWrapper";
import { TreeFile } from "@/features/Playground/FileTree/TreeFile";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import type { ReactNode } from "react";
import { FileInfoRow } from "./FileInfoRow";
import { HeroIcon } from "@/components/Atoms/Icons/HeroIcon";
import { RenameDialog } from "../Dialog/RenameDialog";
import { useModal } from "@/Hooks/UI/useModal";

type FileActionsPopoverProps = {
  children: ReactNode;
  targetId: string;
  targetName: string;
  renameItem: (newName: string) => void;
  deleteItem: () => void;
};

export function FileActionsPopover({
  children,
  targetId,
  targetName,
  renameItem,
  deleteItem,
}: FileActionsPopoverProps) {

  const {modalOpen: renameOpen, openModal: openRename, closeModal: closeRename} = useModal()

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>{children}</PopoverTrigger>
        <PopoverContent
          onClick={(e) => e.stopPropagation()}
          align="end"
          className="text-white hover:cursor-default flex flex-col gap-2 p-4 bg-ludoGrayLight"
        >
          <FileWrapper isSelected={false} onClick={() => deleteItem()}>
            <FileInfoRow
              renameFile={renameItem}
              deleteFile={deleteItem}
              fileName={"Delete"}
            >
              <HeroIcon iconName="TrashIcon" className="h-4 text-white" />
            </FileInfoRow>
          </FileWrapper>
          <FileWrapper onClick={() => openRename()} isSelected={false}>
            <FileInfoRow
              renameFile={renameItem}
              deleteFile={renameItem}
              fileName={"Rename"}
            >
              <HeroIcon iconName="PencilIcon" className="h-4 text-white" />
            </FileInfoRow>
          </FileWrapper>
        </PopoverContent>
      </Popover>
      <RenameDialog open={renameOpen} close={closeRename} itemName={targetName} onSubmit={renameItem}/>
    </>
  );
}
