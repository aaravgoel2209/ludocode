import { router } from "../routes/router";
import { ludoNavigation } from "../routes/ludoNavigation";

export type NavIcon = {
  name: string;
  icon?: string;
  onClick?: () => void;
};

  export const navIcons: NavIcon[] = [
    {
      name: "Courses",
      onClick: () => router.navigate(ludoNavigation.courseRoot()),
    },
    {
      name: "Learn",
      onClick: () => router.navigate(ludoNavigation.moduleRedirect()),
    },
    {
      name: "Practice",
      onClick: () => router.navigate(ludoNavigation.practice()),
    },
    {
      name: "Profile",
      onClick: () => router.navigate(ludoNavigation.me())
    },
  ];