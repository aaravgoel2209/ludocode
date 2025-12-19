
import { LudoButton } from "@/components/design-system/primitives/ludo-button";
import { FooterShell } from "@/components/design-system/zones/footer-shell";
import { useOnboardingContext } from "@/features/Onboarding/Context/OnboardingContext.tsx";

type OnboardingFooterProps = {};

export function OnboardingFooter({}: OnboardingFooterProps) {
  const { hook } = useOnboardingContext();
  const { canAdvance, next } = hook;

  return (
    <FooterShell>
      <div className="flex w-full justify-between py-2 items-center col-start-2 col-end-12 lg:col-start-3 lg:col-end-11">
        <div />
        <LudoButton className="h-10" variant="alt" onClick={() => next()} disabled={!canAdvance()}>
          Continue
        </LudoButton>
      </div>
    </FooterShell>
  );
}
