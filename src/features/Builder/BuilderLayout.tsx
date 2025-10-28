import { LessonFooter } from "../../components/Molecules/Footer/LessonFooter";
import { MainContentWrapper } from "../../Layouts/LayoutWrappers/MainContentWrapper";
import { buildRoute } from "../../routes/router";
import type {
  CourseSnap,
  ModuleSnapshot,
} from "../../Types/Snapshot/SnapshotTypes";
import { BuilderPage } from "./BuilderPage";
import { useAppForm } from "../../form/formKit";

type BuilderPageProps = {};

export function BuilderLayout({}: BuilderPageProps) {

  const { snapshots, courseId, moduleId } = buildRoute.useLoaderData() as {
    snapshots: ModuleSnapshot[];
    courseId: string;
    moduleId: string;
  };

  const form = useAppForm({
    defaultValues: { courseId, modules: snapshots } satisfies CourseSnap,
    onSubmit: () => {},
  })


  return (
    <form.AppForm>
      <div className="grid grid-rows-[1fr_auto] min-h-0">
        <MainContentWrapper>
          <BuilderPage />
        </MainContentWrapper>
        <LessonFooter phase="DEFAULT">
          <div
            className={`flex w-full justify-end py-2 items-center col-start-2 col-end-12 lg:col-start-3 lg:col-end-11`}
          ></div>
        </LessonFooter>
      </div>
    </form.AppForm>
  );
}
