import { queryOptions } from "@tanstack/react-query";
import { qk } from "../../constants/qk";
import { fetchCourseProgress } from "./useCourseProgress";
import { fetchCourseTree } from "./Tree/fetchCourseTree";
import { fetchAllCourses } from "./useAllCourses";
import { moduleBatcher } from "./Batcher/batchers";
import { fetchCurrentUser } from "./useCurrentUser";

export const qo = {
  currentUser: () =>
    queryOptions({ queryKey: qk.currentUser(), queryFn: fetchCurrentUser, staleTime: 60_000 }),


  allCourses: () => queryOptions({ queryKey: qk.courses(), queryFn: () => fetchAllCourses()}),

  courseProgress: (courseId: string) =>
    queryOptions({ queryKey: qk.courseProgress(courseId), queryFn: () => fetchCourseProgress(courseId), staleTime: 60_000 }),

  courseTree: (courseId: string) =>
    queryOptions({ queryKey: qk.courseTree(courseId), queryFn: () => fetchCourseTree(courseId), staleTime: 5 * 60_000 }),

  module: (moduleId: string) =>
    queryOptions({ queryKey: qk.module(moduleId), queryFn: () => moduleBatcher.fetch(moduleId), staleTime: 60_000 }),


};