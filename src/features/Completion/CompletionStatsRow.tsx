import { HollowSlotButton } from "@/components/Atoms/Button/HollowSlotButton";
import type { LessonStats } from "../../Types/Exercise/LessonStats";
import { HollowSlotButtonGroup } from "@/components/Molecules/Group/HollowSlotButtonGroup";

type CompletionStatsRowProps = { userStats: LessonStats };

export function CompletionStatsRow({ userStats }: CompletionStatsRowProps) {
  const { coins, accuracy } = userStats;

  return (
    <HollowSlotButtonGroup className="bg-ludoGrayLight p-4 rounded-2xl gap-4 justify-center">
      <HollowSlotButton>
        <p className="px-4">Coins: {coins}</p>
      </HollowSlotButton>
      <HollowSlotButton>
        <p className="px-4">Accuracy: {accuracy}</p>
      </HollowSlotButton>
    </HollowSlotButtonGroup>
  );
}
