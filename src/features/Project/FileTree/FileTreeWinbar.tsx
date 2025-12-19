import { NewFilePopover } from "@/components/design-system/blocks/popover/new-file-popover";
import { CircleButton } from "@/components/design-system/misc/button/circle-button.tsx";
import { Winbar } from "@/components/design-system/zones/winbar.tsx";


export function FileTreeWinbar() {
  return (
    <Winbar>
      <div className="flex h-full text-white justify-between items-center">
        <p>Files</p>
        <NewFilePopover>
          <CircleButton iconName="PlusIcon" />
        </NewFilePopover>
      </div>
    </Winbar>
  );
}
