import { NewFilePopover } from "@/features/Project/FileTree/new-file-popover";
import { IconButton } from "@/components/design-system/primitives/icon-button";
import { Winbar } from "@/components/design-system/zones/winbar.tsx";

export function FileTreeWinbar() {
  return (
    <Winbar>
      <div className="flex h-full text-white justify-between items-center">
        <p>Files</p>
        <NewFilePopover>
          <IconButton iconName="PlusIcon" />
        </NewFilePopover>
      </div>
    </Winbar>
  );
}
