import { Hero } from "@/components/design-system/zones/hero.tsx";

type BuilderHubHeroProps = { openCreateCourse: () => void };

export function BuilderHubHero({ openCreateCourse }: BuilderHubHeroProps) {
  const title = "Builder";
  const subtitle =
    "Here you are able to create and edit courses and their content";
  const buttonText = "Add Course";

  return (
    <Hero
      onClick={openCreateCourse}
      title={title}
      subtitle={subtitle}
      buttonText={buttonText}
    />
  );
}
