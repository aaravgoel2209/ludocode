import type { StepProps } from "@/Types/Onboarding/OnboardingSteps";

type CourseChoiceStepProps = {};

export function CourseChoiceStep({ next, prev, goto }: StepProps) {
  if (!next) console.log("hi");
  return (
    <>
      <p>CourseChoiceStep</p>
    </>
  );
}
