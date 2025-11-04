import type { OnboardingFormContent } from "@/Types/Onboarding/OnboardingCourse";
import { createContext, useContext } from "react";

export const OnboardingContext = createContext<OnboardingFormContent | null>(null);

export function useOnboardingContext() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useLesson must be used inside a LessonContext.Provider");
  return ctx;
}
