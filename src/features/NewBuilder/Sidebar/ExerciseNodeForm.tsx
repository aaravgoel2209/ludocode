import { courseFormOpts, withForm } from "@/form/formKit";
import { router } from "@/routes/router";
import { ludoNavigation } from "@/routes/ludoNavigation";
import { ExerciseOptionsForm } from "./ExerciseOptionsForm";
import { ExerciseNodeInfoForm } from "./ExerciseNodeInfoForm";
import { DeleteDialogWithTrigger } from "@/components/Molecules/Dialog/DeleteDialogWithTrigger";
import { Button } from "@/components/ui/button";
import { ExerciseNodesList } from "../Exercises/ExerciseNodesList";

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
      <div className="w-full rounded-md bg-ludoGrayLight p-4 space-y-4">
        <form.AppField
          key={`${currentModuleId}-${currentLessonId}-${exerciseId}`}
          name={`modules[${moduleIndex}].lessons[${lessonIndex}].exercises`}
          mode="array"
        >
          {(fieldArray) => {
            const exercises = fieldArray.state.value;

            const exerciseIndex = exercises.findIndex(
              (e) => e.id === exerciseId
            );
            const hasValidIndex =
              exerciseIndex >= 0 && exerciseIndex < exercises.length;

            const removeExercise = () => {
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

            return (
              <>
                <div className="w-full flex flex-col gap-2">
                  <ExerciseNodesList
                    exercises={exercises}
                    currentExerciseId={exerciseId}
                    onSelect={handleSelect}
                    onReorder={handleReorder}
                  />

                  <div className="w-full flex items-center py-2 justify-end">
                    <DeleteDialogWithTrigger
                      targetName="Exercise"
                      onClick={removeExercise}
                    >
                      <Button>Delete</Button>
                    </DeleteDialogWithTrigger>
                  </div>
                </div>

                {hasValidIndex && exerciseId && (
                  <>
                    <div className="w-full flex flex-col">
                      <ExerciseNodeInfoForm
                        key={exerciseId}
                        form={form}
                        moduleIndex={moduleIndex}
                        lessonIndex={lessonIndex}
                        exerciseIndex={exerciseIndex}
                      />
                    </div>

                    <ExerciseOptionsForm
                      form={form}
                      moduleIndex={moduleIndex}
                      lessonIndex={lessonIndex}
                      exerciseId={exerciseId}
                      exerciseIndex={exerciseIndex}
                    />
                  </>
                )}
              </>
            );
          }}
        </form.AppField>
      </div>
    );
  },
});
