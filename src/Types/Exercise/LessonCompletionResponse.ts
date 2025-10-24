import type { CourseProgress } from "../Progress/CourseProgress";
import type { LudoStats } from "../User/LudoStats";
import type { LudoLesson } from "./LudoLesson";

export type LessonCompletionStatus = "OK" | "COURSE_COMPLETE" | "DUPLICATE"

export type LessonCompletionPacket = {
    content: LessonCompletionResponse;
    status: LessonCompletionStatus;
}

export type LessonCompletionResponse = {
    newStats: LudoStats;
    newCourseProgress: CourseProgress;
    updatedCompletedLesson: LudoLesson;
}