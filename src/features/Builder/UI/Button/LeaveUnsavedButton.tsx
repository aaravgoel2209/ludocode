import { LeaveUnsavedDialogWithTrigger } from "@/components/Molecules/Dialog/LeaveUnsavedDialogWithTrigger";
import { Button } from "@/components/ui/button";
import { ludoNavigation } from "@/routes/ludoNavigation";
import { router } from "@/routes/router";

type LeaveUnsavedButtonProps = {};

export function LeaveUnsavedButton({}: LeaveUnsavedButtonProps) {
  return (
    <LeaveUnsavedDialogWithTrigger
      onClick={() => router.navigate(ludoNavigation.build.toSelectCourse())}
    >
      <Button> Quit </Button>
    </LeaveUnsavedDialogWithTrigger>
  );
}
