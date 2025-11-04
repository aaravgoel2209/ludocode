import type { StepProps } from "@/Types/Onboarding/OnboardingSteps";
import { useOnboardingContext } from "../OnboardingContext";

type CareerChoiceStepProps = {};

export function  CareerChoiceStep({ next, prev, goto }: StepProps) {
  const { careerContent } = useOnboardingContext();

  if (!next) console.log("Jo")

  return (
    <>
      <h1 className="text-2xl text-center font-bold text-white">
        Which direction in Programming Interests you most?
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {careerContent.map((content) => (
          <div className="p-6 min-h-40 flex flex-col items-center justify-center rounded-2xl bg-ludoGrayLight">
            <h1 className="text-white text-xl font-bold">{content.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
