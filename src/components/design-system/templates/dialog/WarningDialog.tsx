import type { ReactNode } from "react";
import { LudoDialog } from "../../widgets/ludo-dialog.tsx";
import { LudoButton } from "@/components/design-system/primitives/ludo-button.tsx";
import {
  DialogDescription,
  DialogTitle,
} from "@/components/external/ui/dialog.tsx";

type WarningDialogProps = {
  title: string;
  buttonText: string;
  subtitle?: string;
  onClick: () => void;
  children: ReactNode;
};

export function WarningDialog({
  children,
  title,
  subtitle,
  onClick,
  buttonText,
}: WarningDialogProps) {
  return (
    <LudoDialog asChild={false} trigger={children}>
      <DialogTitle className="text-white">{title}</DialogTitle>
      {subtitle && (
        <DialogDescription className="text-white code font-bold">
          {subtitle}
        </DialogDescription>
      )}

      <LudoButton
        className="w-full h-10"
        variant="alt"
        onClick={() => onClick()}
      >
        {buttonText}
      </LudoButton>
    </LudoDialog>
  );
}
