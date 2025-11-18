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
import { WarningDialogWithTrigger } from "./WarningDialogWithTrigger";

type DeleteDialogWithTriggerProps = {
  targetName: string;
  canDelete: boolean;
  onClick: () => void;
  children: ReactNode;
};

export function DeleteDialogWithTrigger({
  onClick,
  canDelete,
  targetName,
  children,
}: DeleteDialogWithTriggerProps) {

  const title = `Are you sure you want to delete ${targetName}?`

  return (
    <WarningDialogWithTrigger onClick={onClick} canClick={canDelete} title={title} subtitle="This action is irreversible" buttonText="Delete">
      {children}
    </WarningDialogWithTrigger>
  );
}
