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

type BuilderPageProps = {};

export function BuilderPage({}: BuilderPageProps) {
  const { courseId, moduleId } = buildRoute.useParams();
  const { tree } = buildRoute.useLoaderData();

  const { courseProgress, modules, lessons } = useTreeData({
    tree,
    courseId,
    moduleId,
  });

  const currentLesson = lessons.find((lesson) => lesson.orderIndex == 1)
  const [selectedLesson, setSelectedLesson] = useState<LudoLesson>(currentLesson!)
  const changeSelectedLesson = (lesson: LudoLesson) => setSelectedLesson(lesson)


  return (
    <div className="grid grid-cols-12 bg-ludoGrayDark">
      <BuilderAsideModules
        modules={modules}
        moduleId={moduleId}
        courseId={courseId}
      />
    <BuilderLessonContent changeSelectedLesson={changeSelectedLesson} currentLesson={selectedLesson} lessons={lessons} moduleId={moduleId}/>

      <AsideComponent orientation="RIGHT">
        <div></div>
      </AsideComponent>
    </div>
  );
}
