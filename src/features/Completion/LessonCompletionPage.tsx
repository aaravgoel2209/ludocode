import { ActionButton } from "../../components/Atoms/Button/ActionButton";
import { HollowSlot } from "../../components/Atoms/Slot/HollowSlot";
import { LessonFooter } from "../../components/Molecules/Footer/LessonFooter";
import { MainContentWrapper } from "../../Layouts/LayoutWrappers/MainContentWrapper";
import { MainGridWrapper } from "../../Layouts/LayoutWrappers/MainGridWrapper";

export function LessonCompletionPage() {
  const coins = 10;
  const accuracy = 60;

  return (
    <MainGridWrapper gridRows="SITE_INVERSE">
      <MainContentWrapper>
        <div className="col-span-full grid grid-cols-12 h-full">
          <div className="text-white col-start-5 col-end-9 flex flex-col items-stretch gap-4 justify-center min-w-0">
            <h2 className="text-center text-2xl">Lesson Complete!</h2>
            <div className="flex bg-ludoGrayLight py-4 rounded-2xl gap-8 items-center justify-center">
              <HollowSlot>
                <p>Coins: {coins}</p>
              </HollowSlot>
              <HollowSlot>
                <p>Accuracy: {accuracy}</p>
              </HollowSlot>
            </div>
          </div>
        </div>
      </MainContentWrapper>
      <LessonFooter phase="DEFAULT">
        <div
          className={`flex w-full justify-end py-2 items-center col-start-2 col-end-12 lg:col-start-3 lg:col-end-11`}
        >
            <ActionButton text="Continue" active={true}/>
        </div>
      </LessonFooter>
    </MainGridWrapper>
  );
}
