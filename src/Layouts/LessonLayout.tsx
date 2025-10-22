import { Outlet } from "@tanstack/react-router";
import { GlobalFooter } from "../components/Footer/GlobalFooter";
import { TutorialHeader } from "../features/Tutorial/TutorialHeader";
import { lessonRoute, lessonSectionRoute } from "../routes/router";
import { useExerciseState } from "../Hooks/Exercises/useExerciseState";
import { LessonContext } from "../features/Tutorial/useLessonContext";
import { TutorialFooter } from "../features/Tutorial/TutorialFooter";
import { MainContentWrapper } from "./LayoutWrappers/MainContentWrapper";
import { MainGridWrapper } from "./LayoutWrappers/MainGridWrapper";

export function LessonLayout() {
  const { lessonId } = lessonRoute.useParams();
  const {courseId} = lessonRoute.useParams();

  const {exercises, lesson} = lessonSectionRoute.useLoaderData();
  const { exercise: position } = lessonRoute.useSearch();

  const exercisePosition = Number(position ?? 1);

  const state = useExerciseState({ exercisePosition, lessonId, courseId, exercises, lesson });

  const { canSubmit, goToNextExercise } = state;

  return (
    <LessonContext.Provider value={state}>
      <MainGridWrapper gridRows="FULL">
        <TutorialHeader
          total={exercises.length}
          position={exercisePosition - 1}
        />
        <MainContentWrapper>
          <Outlet />
        </MainContentWrapper>
        <TutorialFooter submitAnswer={goToNextExercise} canSubmit={canSubmit} />
      </MainGridWrapper>
    </LessonContext.Provider>
  );
}
