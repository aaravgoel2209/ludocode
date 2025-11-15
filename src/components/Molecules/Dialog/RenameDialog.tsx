import { Dialog, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogWrapper } from "./DialogWrapper";
import { ActionButton } from "@/components/Atoms/Button/ActionButton";
import { useState } from "react";
import { Input } from "@/components/ui/input";

type RenameDialogProps = {
  itemName: string;
  onSubmit: (value: string) => void;
  open: boolean;
  close: () => void;
};

export function RenameDialog({
  open,
  close,
  itemName,
  onSubmit,
}: RenameDialogProps) {
  const [textBuffer, setTextBuffer] = useState<string>(itemName);

  return (
    <Dialog open={open} onOpenChange={() => close()}>
      <DialogWrapper>
        <DialogTitle className="text-white">Rename Project</DialogTitle>
        <Input
          value={textBuffer}
          onChange={(e) => setTextBuffer(e.target.value)}
        />
        <ActionButton
          onClick={() => onSubmit(textBuffer)}
          active={true}
          orientation="center"
          text="Save"
        />
      </DialogWrapper>
    </Dialog>
  );
}
