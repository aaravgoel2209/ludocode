import { courseFormOpts, withForm } from "@/form/formKit";
import { router } from "@/routes/router";
import { ludoNavigation } from "@/routes/ludoNavigation";
import { ExerciseOptionsForm } from "./ExerciseOptionsForm";
import { ExerciseNodeInfoForm } from "./ExerciseNodeInfoForm";
import { DeleteDialogWithTrigger } from "@/components/Molecules/Dialog/DeleteDialogWithTrigger";
import { Button } from "@/components/ui/button";

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

            // Compute the *current* index inside the array field, not outside
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

              // 1) mutate array
              fieldArray.removeValue(exerciseIndex);

              // 2) then navigate based on the neighbor or fallback
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

            return (
              <>
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex gap-2 items-center p-2 border border-ludoGrayDark rounded-md">
                    {exercises.map((exercise, index) => {
                      const isSelected =
                        hasValidIndex && exerciseIndex === index;
                      return (
                        <div
                          key={exercise.id}
                          onClick={() =>
                            router.navigate(
                              ludoNavigation.build.toBuilderExercise(
                                courseId,
                                currentModuleId,
                                currentLessonId,
                                exercise.id
                              )
                            )
                          }
                          className={`h-6 w-6 hover:cursor-pointer rounded-full ${
                            isSelected
                              ? "bg-ludoLightPurple"
                              : "bg-ludoGrayDark"
                          }`}
                        />
                      );
                    })}
                  </div>
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
