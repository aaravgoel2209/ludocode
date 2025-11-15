import { Dialog, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogWrapper } from "./DialogWrapper";
import { Input } from "@/components/ui/input";
import { ActionButton } from "@/components/Atoms/Button/ActionButton";

type DeleteDialogProps = {
  open: boolean;
  targetName: string;
  close: () => void;
  onClick: () => void;
};

export function DeleteDialog({
  onClick,
  open,
  close,
  targetName,
}: DeleteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={() => close()}>
      <DialogWrapper>
        <DialogTitle className="text-white">
          Are you sure you want to delete{" "}
          <span className="font-bold">{targetName}</span> ?
        </DialogTitle>
        <DialogDescription className="text-white code font-bold">
          This Action is irreversible
        </DialogDescription>
        <ActionButton
          onClick={() => onClick()}
          active={true}
          orientation="center"
          text="Delete"
        />
      </DialogWrapper>
    </Dialog>
  );
}
