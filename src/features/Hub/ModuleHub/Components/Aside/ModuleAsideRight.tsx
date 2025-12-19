import { useResetCourseProgress } from "@/hooks/Queries/Mutations/useResetCourseProgress.tsx";
import type { LudoModule } from "@/types/Catalog/LudoModule.ts";
import { Spinner } from "@/components/external/ui/spinner.tsx";
import { ModulesList } from "@/features/Hub/ModuleHub/Components/Selection/ModulesList.tsx";
import { Aside } from "@/components/design-system/zones/aside";
import { LudoButton } from "@/components/design-system/primitives/ludo-button";

type ModuleAsideRightProps = {
  modules: LudoModule[];
  courseId: string;
  courseName: string;
};

export function ModuleAsideRight({
  modules,
  courseId,
  courseName,
}: ModuleAsideRightProps) {
  const resetCourseProgressMutation = useResetCourseProgress();

  const handleResetCourse = (courseId: string) => {
    if (isResettingCourse) return;
    resetCourseProgressMutation.mutate(courseId);
  };

  const isResettingCourse = resetCourseProgressMutation.isPending;

  return (
    <Aside orientation="RIGHT_WIDE" innerClassName="py-6 px-12">
      <ModulesList modules={modules} header={{ courseName }} />
      <div className="mt-6">
        <LudoButton
          variant="alt"
          disabled={isResettingCourse}
          className="w-full h-12 text-xl"
          onClick={() => handleResetCourse(courseId)}
        >
          Reset
          {isResettingCourse && <Spinner className="text-ludoLightPurple" />}
        </LudoButton>
      </div>
    </Aside>
  );
}
