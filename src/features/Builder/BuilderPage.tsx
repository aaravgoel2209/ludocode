import { useSuspenseQueries } from "@tanstack/react-query";
import { ListContainer } from "../../components/Molecules/List/ListContainer";
import { qo } from "../../Hooks/Queries/Definitions/queries";
import { AsideComponent } from "../../Layouts/Aside/AsideComponent";
import { buildRoute, router } from "../../routes/router";
import type { FlatModule } from "../../Types/Catalog/FlatCourseTree";
import type { LudoModule } from "../../Types/Catalog/LudoModule";
import { useTreeData } from "../../Hooks/Logic/Catalog/useTreeData";
import { ListRow } from "../../components/Atoms/Row/ListRow";
import { ludoNavigation } from "../../routes/ludoNavigation";
import { BuilderAsideModules } from "./BuilderAsideModules";
import { SubGridWrapper } from "../../Layouts/LayoutWrappers/SubGridWrapper";
import { BuilderLessonContent } from "./BuilderLessonContent";
import { useState } from "react";
import type { LudoLesson } from "../../Types/Catalog/LudoLesson";
import type { LessonSnap, ModuleSnapshot } from "../../Types/Snapshot/SnapshotTypes";

type BuilderPageProps = {};

export function BuilderPage({}: BuilderPageProps) {
  const { courseId, moduleId } = buildRoute.useParams();
  const { snapshots } = buildRoute.useLoaderData();

  const modules : ModuleSnapshot[] = snapshots

  const currentModule = modules.find((module) => module.moduleId == moduleId)
  const currentModuleLessons = currentModule!.lessons

  const currentLesson = currentModuleLessons.find((lesson) => lesson.orderIndex == 1)
  const [selectedLesson, setSelectedLesson] = useState<LessonSnap>(currentLesson!)
  const changeSelectedLesson = (lesson: LessonSnap) => setSelectedLesson(lesson)


  return (
    <div className="grid grid-cols-12 bg-ludoGrayDark">
      <BuilderAsideModules
        modules={modules}
        moduleId={moduleId}
        courseId={courseId}
      />
    <BuilderLessonContent changeSelectedLesson={changeSelectedLesson} currentLesson={selectedLesson} lessons={currentModuleLessons} moduleId={moduleId}/>

      <AsideComponent orientation="RIGHT">
        <div></div>
      </AsideComponent>
    </div>
  );
}
