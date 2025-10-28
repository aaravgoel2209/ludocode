import { LessonFooter } from "../../components/Molecules/Footer/LessonFooter";
import { MainContentWrapper } from "../../Layouts/LayoutWrappers/MainContentWrapper";
import { buildRoute, router } from "../../routes/router";
import type {
  CourseSnap,
  LessonSnap,
  ModuleSnapshot,
} from "../../Types/Snapshot/SnapshotTypes";
import { BuilderPage } from "./BuilderPage";
import { courseFormOpts, useAppForm } from "../../form/formKit";
import { ListContainer } from "../../components/Molecules/List/ListContainer";
import { ListRow } from "../../components/Atoms/Row/ListRow";
import { ludoNavigation } from "../../routes/ludoNavigation";
import { ModuleForm } from "./Forms/ModuleForm";
import { BuilderAsideModules } from "./BuilderAsideModules";
import { BuilderLessonContent } from "./BuilderLessonContent";
import { BuilderExerciseColumn } from "./BuilderExerciseColumn";
import { useState } from "react";

type BuilderLayoutProps = {};

export function BuilderLayout({}: BuilderLayoutProps) {
  const { snapshots, courseId, moduleId } = buildRoute.useLoaderData() as {
    snapshots: ModuleSnapshot[];
    courseId: string;
    moduleId: string;
  };

  const form = useAppForm({
    ...courseFormOpts,
    defaultValues: { courseId, modules: snapshots }, // async data
    onSubmit: () => {},
  });

  const modules: ModuleSnapshot[] = snapshots;

  const currentModule = modules.find((module) => module.moduleId == moduleId);
  const currentModuleLessons = currentModule!.lessons;

  const initialLesson = currentModuleLessons.find(
    (lesson) => lesson.orderIndex == 1
  );

  const [selectedLesson, setSelectedLesson] = useState<LessonSnap>(
    initialLesson!
  );
  const changeSelectedLesson = (lesson: LessonSnap) =>
    setSelectedLesson(lesson);

  return (
    <form.AppForm>
      <div className="grid grid-rows-[1fr_auto] min-h-0">
        <MainContentWrapper>
          <div className="grid grid-cols-12 bg-ludoGrayDark">
            <ModuleForm form={form} moduleId={moduleId} courseId={courseId} />
            <BuilderLessonContent
              changeSelectedLesson={changeSelectedLesson}
              currentLesson={selectedLesson}
              lessons={currentModuleLessons}
              moduleId={moduleId}
            />
            <BuilderExerciseColumn currentLesson={selectedLesson} />
          </div>
        </MainContentWrapper>
        <LessonFooter phase="DEFAULT">
          <div
            className={`flex w-full justify-end py-2 items-center col-start-2 col-end-12 lg:col-start-3 lg:col-end-11`}
          >
          </div>
        </LessonFooter>
      </div>
    </form.AppForm>
  );
}
