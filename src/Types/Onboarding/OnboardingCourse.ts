export type OnboardingFormContent = {
    courseContent: OnboardingCourseType[]
    careerContent: OnboardingCareerType[]
}

export type OnboardingCourseType = {
    courseId: string;
    title: string;
    description: string;
}

export type CareerType = "Data Science" | "IOS DEVELOPER"

export type OnboardingCareerType = {
    courseId: string;
    careerType: CareerType
    title: string;
    description: string;
    topPath: string;
}