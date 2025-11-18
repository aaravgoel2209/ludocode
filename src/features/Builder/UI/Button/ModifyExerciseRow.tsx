import { AddExerciseDialog } from "@/components/Molecules/Dialog/AddExerciseDialog";
import { DeleteDialogWithTrigger } from "@/components/Molecules/Dialog/DeleteDialogWithTrigger";
import { Button } from "@/components/ui/button";
import type { ExerciseSnap } from "@/Types/Snapshot/SnapshotTypes";

type ModifyExerciseRowProps = {
  canRemoveExercises: boolean;
  createExercise: (newExercise: ExerciseSnap) => void;
  removeExercise: () => void;
};

export function ModifyExerciseRow({
  canRemoveExercises,
  removeExercise,
  createExercise,
}: ModifyExerciseRowProps) {
  return (
    <div className="w-full flex gap-4 items-center py-2 justify-end">
      <AddExerciseDialog onClick={createExercise}>
        <Button>Add Exercise</Button>
      </AddExerciseDialog>

      <DeleteDialogWithTrigger
        canDelete={canRemoveExercises}
        targetName="Exercise"
        onClick={removeExercise}
      >
        <Button>Delete</Button>
      </DeleteDialogWithTrigger>
    </div>
  );
}
