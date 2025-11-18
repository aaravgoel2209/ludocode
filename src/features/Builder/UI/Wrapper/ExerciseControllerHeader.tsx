import { DevInfoDialog } from "@/components/Molecules/Dialog/DevInfoDialog";
import { exTypeInfoContent } from "@/lib/infoContent";
import type { ExerciseType } from "@/Types/Exercise/ExerciseType";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

type ExerciseControllerHeaderProps = { exerciseType: ExerciseType | null };

export function ExerciseControllerHeader({
  exerciseType,
}: ExerciseControllerHeaderProps) {
  const headerDisplay = exerciseType ?? "None Selected";
  return (
    <div className="w-full gap-4 flex items-center font-bold text-white py-2">
      <h2>Exercise Type: {headerDisplay}</h2>
      <DevInfoDialog content={exTypeInfoContent}>
        <QuestionMarkCircleIcon className="h-4 hover:cursor-pointer hover:text-ludoLightPurple w-4" />
      </DevInfoDialog>
    </div>
  );
}
