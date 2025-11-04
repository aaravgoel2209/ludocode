import { MainContentWrapper } from "@/Layouts/LayoutWrappers/MainContentWrapper";
import { MainGridWrapper } from "@/Layouts/LayoutWrappers/MainGridWrapper";
import { TutorialHeader } from "../Tutorial/TutorialHeader";
import { LessonFooter } from "@/components/Molecules/Footer/LessonFooter";
import { onboardingFormOpts, useAppForm } from "@/form/formKit";
import { Outlet, useNavigate, useParams } from "@tanstack/react-router";
import { useState } from "react";
import type {
  OnboardingCareerType,
  OnboardingCourseType,
  OnboardingFormContent,
} from "@/Types/Onboarding/OnboardingCourse";
import {
  stepOrder,
  steps,
  type StageKey,
} from "@/Types/Onboarding/OnboardingSteps";
import { onboardingRoute, onboardingStageRoute } from "@/routes/router";
import { OnboardingContext } from "./OnboardingContext";

type OnboardingLayoutProps = {};

const onboardingContent: OnboardingFormContent = {
  courseContent: [
    {
      courseId: "1",
      title: "Python",
      description: "Python is a simple programming language",
    },
    {
      courseId: "2",
      title: "Swift",
      description: "Swift is by apple",
    },
  ],
  careerContent: [
    {
      courseId: "1",
      title: "Data science",
      careerType: "Data Science",
      description: "Data scientists",
      topPath: "Python",
    },
    {
      courseId: "2",
      title: "IOS Developer",
      careerType: "IOS DEVELOPER",
      description: "Ios Developer",
      topPath: "Swift",
    },
  ],
};


export function OnboardingLayout() {
  return (
    <OnboardingContext.Provider value={onboardingContent}>
      <MainGridWrapper gridRows="FULL">
        <TutorialHeader total={stepOrder.length} position={1} />
        <MainContentWrapper>
          <div className="grid col-span-full grid-cols-12">
            <div className="col-start-2 col-end-11 lg:col-start-3 lg:col-end-11 py-6 min-w-0">
              <Outlet />
            </div>
          </div>
        </MainContentWrapper>
        <LessonFooter phase="DEFAULT">
          <div className="flex w-full justify-between py-2 items-center col-start-2 col-end-12 lg:col-start-3 lg:col-end-11" />
        </LessonFooter>
      </MainGridWrapper>
    </OnboardingContext.Provider>
  );
}
