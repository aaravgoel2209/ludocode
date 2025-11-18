import type { ReactNode } from "react";
import { WarningDialogWithTrigger } from "./WarningDialogWithTrigger";

type LeaveUnsavedDialogWithTriggerProps = {
  onClick: () => void;
  children: ReactNode;
};

export function LeaveUnsavedDialogWithTrigger({
  onClick,
  children,
}: LeaveUnsavedDialogWithTriggerProps) {
  const title = `Are you sure you want to exit the builder?`;

  return (
    <WarningDialogWithTrigger
      onClick={onClick}
      canClick={true}
      title={title}
      subtitle="ALL unsubmitted changes will be lost. If you want to submit, click Submit Snapshot in the header"
      buttonText="Quit"
    >
      {children}
    </WarningDialogWithTrigger>
  );
}
