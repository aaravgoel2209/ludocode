import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { qo } from "@/Hooks/Queries/Definitions/queries";
import { MainGridWrapper } from "@/Layouts/LayoutWrappers/MainGridWrapper";
import { buildRoute, router } from "@/routes/router";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { BuilderSidebar } from "./BuilderSidebar";

import type { CourseSnap, ModuleSnap } from "@/Types/Snapshot/SnapshotTypes";
import { courseFormOpts, useAppForm } from "@/form/formKit";
import { SUBMIT_COURSE_SNAPSHOT } from "@/constants/pathConstants";
import { ludoPost } from "@/Hooks/Queries/Fetcher/ludoPost";
import { qk } from "@/constants/qk";
import { ExerciseNodeForm } from "./Sidebar/ExerciseNodeForm";
import { Button } from "@/components/ui/button";
import { DeleteDialogWithTrigger } from "@/components/Molecules/Dialog/DeleteDialogWithTrigger";
import { ludoNavigation } from "@/routes/ludoNavigation";
import { ExitDialog } from "@/components/Molecules/Dialog/ExitDialog";
import { LeaveUnsavedDialogWithTrigger } from "@/components/Molecules/Dialog/LeaveUnsavedDialogWithTrigger";

type NewBuilderLayoutProps = {};

export function NewBuilderLayout({}: NewBuilderLayoutProps) {
  const { courseId } = buildRoute.useParams();
  const { data: courseSnapshot } = useSuspenseQuery(
    qo.courseSnapshot(courseId)
  );

  const modules: ModuleSnap[] = courseSnapshot.modules;

  const qc = useQueryClient();
  const {
    moduleId: currentModuleId,
    lessonId: currentLessonId,
    exerciseId: currentExerciseId,
  } = buildRoute.useSearch();

  const form = useAppForm({
    ...courseFormOpts,
    defaultValues: { courseId, modules },
    onSubmit: async ({ value }) => {
      try {
        const fresh = await ludoPost<CourseSnap>(
          SUBMIT_COURSE_SNAPSHOT,
          value,
          true
        );
        qc.setQueryData(qk.courseSnapshot(fresh.courseId), fresh);
        form.update({ defaultValues: fresh });
        form.reset();
      } catch (err) {
        console.log("Error");
        console.error("❌ Submission failed:", err);
      }
    },
  });

  return (
    <form.AppForm>
      <SidebarProvider>
        <BuilderSidebar
          currentLessonId={currentLessonId}
          currentModuleId={currentModuleId}
          form={form}
        />
        <SidebarInset>
          <MainGridWrapper gridRows="SITE">
            <div className="flex w-full justify-center text-white bg-ludoGrayLight items-center gap-4 px-4 h-14">
              <LeaveUnsavedDialogWithTrigger
                onClick={() =>
                  router.navigate(ludoNavigation.build.toSelectCourse())
                }
              >
                <Button> Quit </Button>
              </LeaveUnsavedDialogWithTrigger>
              <p>Builder</p>
              <Button
                onClick={async () => {
                  console.log("hi");
                  const result = await form.validate("submit");
                  console.log(JSON.stringify(result));

                  form.handleSubmit();
                }}
              >
                Submit Snapshot
              </Button>
            </div>
            <div className="grid col-span-full h-full grid-cols-12 bg-ludoGrayDark">
              <div className="col-start-2 py-8 h-full flex items-start justify-center col-end-12">
                <ExerciseNodeForm
                  courseId={courseId}
                  currentModuleId={currentModuleId}
                  currentLessonId={currentLessonId}
                  exerciseId={currentExerciseId}
                  form={form}
                />
              </div>
            </div>
          </MainGridWrapper>
        </SidebarInset>
      </SidebarProvider>
    </form.AppForm>
  );
}
