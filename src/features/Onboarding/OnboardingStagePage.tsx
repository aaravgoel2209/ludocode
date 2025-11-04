import { useNavigate } from "@tanstack/react-router";
import { onboardingStageRoute } from "@/routes/router";
import { steps, stepOrder, type StageKey } from "@/Types/Onboarding/OnboardingSteps";

export function OnboardingStagePage() {
  const { stage } = onboardingStageRoute.useParams() as { stage: StageKey };
  const Step = steps[stage];
  const navigate = useNavigate();

  const goto = (s: StageKey) =>
    navigate({ to: onboardingStageRoute.to, params: { stage: s } });

  const i = stepOrder.indexOf(stage);
  const next = () => goto(stepOrder[Math.min(i + 1, stepOrder.length - 1)]);
  const prev = () => goto(stepOrder[Math.max(i - 1, 0)]);

  return <Step next={next} prev={prev} goto={goto} />;
}