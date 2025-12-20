import { HollowSlotButton } from "@/components/design-system/primitives/hollow-slot";
import { IconLabel } from "@/components/design-system/primitives/IconLabel";
import type { LessonStats } from "@/types/Completion/LessonStats.ts";

type CompletionStatsRowProps = { userStats: LessonStats };

export function CompletionStatsGroup({ userStats }: CompletionStatsRowProps) {
  const { coins, accuracy } = userStats;

  return (
    <IconLabel className="bg-ludoGrayLight p-4 rounded-lg gap-4 justify-center">
      <HollowSlotButton>
        <p className=" px-2 lg:px-4">Coins: {coins}</p>
      </HollowSlotButton>
      <HollowSlotButton>
        <p className="px-2 lg:px-4">Accuracy: {accuracy}%</p>
      </HollowSlotButton>
    </IconLabel>
  );
}
