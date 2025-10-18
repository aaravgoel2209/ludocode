import { createContext, useContext } from "react";
import type { useUserStatsReturn } from "../../Hooks/Queries/useUserStats";

export const StatsContext = createContext<useUserStatsReturn | null>(null);

export function useStatsContext() {
  const ctx = useContext(StatsContext);
  if (!ctx)
    throw new Error("useLesson must be used inside a LessonContext.Provider");
  return ctx;
}
