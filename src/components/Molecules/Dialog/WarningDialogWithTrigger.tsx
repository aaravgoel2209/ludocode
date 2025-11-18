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
  title: string;
  buttonText: string;
  subtitle?: string;
  canClick: boolean;
  onClick: () => void;
  children: ReactNode;
};

export function WarningDialogWithTrigger({
  onClick,
  canClick,
  title,
  buttonText,
  subtitle,
  children,
}: DeleteDialogWithTriggerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogWrapper>
        <DialogTitle className="text-white">{title}</DialogTitle>
        {subtitle && (
          <DialogDescription className="text-white code font-bold">
            {subtitle}
          </DialogDescription>
        )}

        <ActionButton
          onClick={() => onClick()}
          active={canClick}
          orientation="center"
          text={buttonText}
        />
      </DialogWrapper>
    </Dialog>
  );
}
