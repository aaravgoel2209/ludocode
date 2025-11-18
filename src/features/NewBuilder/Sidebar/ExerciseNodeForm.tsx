import { courseFormOpts, withForm } from "@/form/formKit";
import { router } from "@/routes/router";
import { ludoNavigation } from "@/routes/ludoNavigation";
import { ExerciseOptionsForm } from "./ExerciseOptionsForm";
import { ExerciseNodeInfoForm } from "./ExerciseNodeInfoForm";
import { DeleteDialogWithTrigger } from "@/components/Molecules/Dialog/DeleteDialogWithTrigger";
import { Button } from "@/components/ui/button";
import { ExerciseNodesList } from "../Exercises/ExerciseNodesList";
import type { ExerciseSnap } from "@/Types/Snapshot/SnapshotTypes";
import { AddExerciseDialog } from "../Dialog/AddExerciseDialog";
import { DevInfoDialog } from "../Dialog/DevInfoDialog";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { exTypeInfoContent } from "@/lib/infoContent";
import { parseExerciseError } from "../Util/ParseErrors";

export const ExerciseNodeForm = withForm({
  ...courseFormOpts,
  props: {
    courseId: "" as string,
    currentModuleId: "" as string,
    currentLessonId: "" as string,
    exerciseId: "" as string,
  },
  render: ({
    form,
    courseId,
    currentModuleId,
    currentLessonId,
    exerciseId,
  }) => {
    const modules = form.state.values.modules;
    const moduleIndex = modules.findIndex(
      (m) => m.moduleId === currentModuleId
    );
    if (moduleIndex < 0) return null;

    const lessons = modules[moduleIndex].lessons;
    const lessonIndex = lessons.findIndex((l) => l.id === currentLessonId);
    if (lessonIndex < 0) return null;

    return (
      <div className="w-full rounded-md flex flex-col space-y-4">
        <form.AppField
          key={`${currentModuleId}-${currentLessonId}-${exerciseId}`}
          name={`modules[${moduleIndex}].lessons[${lessonIndex}].exercises`}
          mode="array"
        >
          {(fieldArray) => {
            const exercises = fieldArray.state.value;

            const canRemoveExercises = exercises.length > 1;

            const exerciseIndex = exercises.findIndex(
              (e) => e.id === exerciseId
            );

            const errorEntries = fieldArray.state.meta.errors ?? [];

            const errorMap = parseExerciseError(errorEntries, exercises);

            const hasValidIndex =
              exerciseIndex >= 0 && exerciseIndex < exercises.length;

            const exerciseType = hasValidIndex
              ? exercises[exerciseIndex].exerciseType
              : null;

            const createExercise = (newExercise: ExerciseSnap) => {
              fieldArray.pushValue(newExercise);
            };

            const removeExercise = () => {
              if (!canRemoveExercises) return;
              if (!hasValidIndex) return;

              const nextId =
                exercises[exerciseIndex + 1]?.id ??
                exercises[exerciseIndex - 1]?.id;

              fieldArray.removeValue(exerciseIndex);

              if (nextId) {
                router.navigate(
                  ludoNavigation.build.toBuilderExercise(
                    courseId,
                    currentModuleId,
                    currentLessonId,
                    nextId
                  )
                );
              } else {
                router.navigate(ludoNavigation.build.toSelectCourse());
              }
            };

            const handleSelect = (id: string) => {
              router.navigate(
                ludoNavigation.build.toBuilderExercise(
                  courseId,
                  currentModuleId,
                  currentLessonId,
                  id
                )
              );
            };

            const handleReorder = (oldIndex: number, newIndex: number) => {
              if (oldIndex === newIndex) return;
              fieldArray.moveValue(oldIndex, newIndex);
            };

            const headerDisplay = exerciseType ?? "None Selected";

            return (
              <>
                <div className="w-full flex rounded-md bg-ludoGrayLight p-4 flex-col gap-2">
                  <div className="w-full gap-4 flex items-center font-bold text-white py-2">
                    <h2>Exercise Type: {headerDisplay}</h2>
                    <DevInfoDialog content={exTypeInfoContent}>
                      <QuestionMarkCircleIcon className="h-4 hover:cursor-pointer hover:text-ludoLightPurple w-4" />
                    </DevInfoDialog>
                  </div>
                  <ExerciseNodesList
                    exercises={exercises}
                    currentExerciseId={exerciseId}
                    onSelect={handleSelect}
                    errorMap={errorMap}
                    onReorder={handleReorder}
                  />

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
                </div>

                {hasValidIndex && exerciseId && (
                  <div className="bg-ludoGrayLight p-4 rounded-md">
                    <div className="w-full flex flex-col">
                      <ExerciseNodeInfoForm
                        key={exerciseId}
                        form={form}
                        moduleIndex={moduleIndex}
                        lessonIndex={lessonIndex}
                        exerciseIndex={exerciseIndex}
                      />
                    </div>
                    {!!exerciseType && exerciseType !== "INFO" && (
                      <ExerciseOptionsForm
                        form={form}
                        moduleIndex={moduleIndex}
                        lessonIndex={lessonIndex}
                        exerciseId={exerciseId}
                        exerciseIndex={exerciseIndex}
                      />
                    )}
                  </div>
                )}
              </>
            );
          }}
        </form.AppField>
      </div>
    );
  },
});
