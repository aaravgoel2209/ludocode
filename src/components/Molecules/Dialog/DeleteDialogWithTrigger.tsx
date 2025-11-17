import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { DialogWrapper } from "./DialogWrapper";
import { Input } from "@/components/ui/input";
import { ActionButton } from "@/components/Atoms/Button/ActionButton";
import type { ReactNode } from "react";

type DeleteDialogWithTriggerProps = {
  targetName: string;
  onClick: () => void;
  children: ReactNode;
};

export function DeleteDialogWithTrigger({
  onClick,
  targetName,
  children,
}: DeleteDialogWithTriggerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
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
