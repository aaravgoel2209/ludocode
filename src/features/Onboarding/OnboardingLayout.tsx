import { GlobalFooter } from "@/components/Molecules/Footer/GlobalFooter";
import { DefaultHeader } from "@/components/Molecules/Header/DefaultHeader";
import { MainContentWrapper } from "@/Layouts/LayoutWrappers/MainContentWrapper";
import { MainGridWrapper } from "@/Layouts/LayoutWrappers/MainGridWrapper";
import { TutorialHeader } from "../Tutorial/TutorialHeader";
import { LessonFooter } from "@/components/Molecules/Footer/LessonFooter";

type OnboardingLayoutProps = {};

export function OnboardingLayout({}: OnboardingLayoutProps) {
  return (
    <MainGridWrapper gridRows={"FULL"}>
      <TutorialHeader total={10} position={1} />
      <MainContentWrapper>
        <div className="grid col-span-full grid-cols-12">
          <div className="col-span-10 lg:col-span-8 flex flex-col gap-8 py-16 items-stretch justify-start h-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        </div>
          </div>
        </div>
      </MainContentWrapper>
      <LessonFooter phase="DEFAULT">
        <div
          className={`flex w-full justify-between py-2 items-center col-start-2 col-end-12 lg:col-start-3 lg:col-end-11`}
        >
        </div>
      </LessonFooter>
    </MainGridWrapper>
  );
}
