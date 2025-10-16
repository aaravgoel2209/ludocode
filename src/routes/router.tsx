import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { TutorialPage } from "../features/Tutorial/TutorialPage";
import { CoursePage } from "../features/Courses/CoursePage";
import { ModulePage } from "../features/Module/ModulePage";


const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: CoursePage,
});

export const tutorialRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: `/tutorial/$tutorialId/exercise/$position`,
  component: TutorialPage,
});

export const unitsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: `/course/$courseName/unit/$position`,
  component: ModulePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  tutorialRoute,
  unitsRoute,
]);
export const router = createRouter({ routeTree });
