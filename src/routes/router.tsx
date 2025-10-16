import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { TutorialPage } from "../features/Tutorial/TutorialPage";
import { CoursePage } from "../features/Courses/CoursePage";
import { ModulePage } from "../features/Module/ModulePage";
import { SiteLayout } from "../Layouts/SiteLayout";
import { DefaultSectionLayout } from "../Layouts/DefaultSectionLayout";
import { ModuleSectionLayout } from "../Layouts/ModuleSectionLayout";


const rootRoute = createRootRoute();



export const siteRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'site',
  component: SiteLayout
})

export const defaultSectionRoute = createRoute({
  getParentRoute: () => siteRoute,
  id: 'defaultsection',
  component: DefaultSectionLayout
})

export const moduleSectionRoute = createRoute({
  getParentRoute: () => siteRoute,
  id: 'modulesection',
  component: ModuleSectionLayout
})

const courseRoute = createRoute({
  getParentRoute: () => defaultSectionRoute,
  path: "/",
  staticData: { headerTitle: 'Courses' },
  component: CoursePage,
});

export const tutorialRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: `/tutorial/$tutorialId/exercise/$position`,
  component: TutorialPage,
});

export const moduleRoute = createRoute({
  getParentRoute: () => moduleSectionRoute,
  path: `/course/$courseName/unit/$position`,
  component: ModulePage,
});

const routeTree = rootRoute.addChildren([
  siteRoute,
  defaultSectionRoute,
  moduleSectionRoute,
  courseRoute,
  tutorialRoute,
  moduleRoute,
]);
export const router = createRouter({ routeTree });
