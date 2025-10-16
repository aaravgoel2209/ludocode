import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { TutorialPage } from "../features/Tutorial/TutorialPage";
import { CoursePage } from "../features/Courses/CoursePage";
import { ModulePage } from "../features/Module/ModulePage";
import { SiteLayout } from "../Layouts/SiteLayout";


const rootRoute = createRootRoute();



export const siteRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'site',
  component: SiteLayout
})

const courseRoute = createRoute({
  getParentRoute: () => siteRoute,
  path: "/",
  component: CoursePage,
});

export const tutorialRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: `/tutorial/$tutorialId/exercise/$position`,
  component: TutorialPage,
});

export const moduleRoute = createRoute({
  getParentRoute: () => siteRoute,
  path: `/course/$courseName/unit/$position`,
  component: ModulePage,
});

const routeTree = rootRoute.addChildren([
  siteRoute,
  courseRoute,
  tutorialRoute,
  moduleRoute,
]);
export const router = createRouter({ routeTree });
