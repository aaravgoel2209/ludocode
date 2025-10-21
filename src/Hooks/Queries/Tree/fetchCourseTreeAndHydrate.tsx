import type { QueryClient } from "@tanstack/react-query";
import { fetchCourseTree } from "./fetchCourseTree";
import type { CourseTree } from "../../../Types/Catalog/CourseTree";
import { qk } from "../../../constants/qk";
import type { LudoUser } from "../../../Types/User/LudoUser";
import type { CourseProgress } from "../../../Types/Progress/CourseProgress";


function hydrateUser(qc: QueryClient, user: LudoUser) {
  qc.setQueryData(qk.currentUser(), user);
  qc.setQueryData(qk.user(user.id), user);
}

function hydrateCourseProgress(qc: QueryClient, cp: CourseProgress) {
  qc.setQueryData(qk.courseProgress(cp.courseId), cp);
}

// you already have this:
async function fetchCourseTreeAndHydrate(qc: QueryClient, courseId: string) {
  const tree = await fetchCourseTree(courseId);
  qc.setQueryData(qk.course(courseId), tree.course);

  const modules = tree.modules.map(m => m.module).sort((a,b)=>a.orderIndex-b.orderIndex);
  qc.setQueryData(qk.modulesBySection(courseId), modules);

  for (const node of tree.modules) {
    qc.setQueryData(qk.module(node.module.id), node.module);
    const lessons = [...node.lessons].sort((a,b)=>a.orderIndex-b.orderIndex);
    qc.setQueryData(qk.lessonsByModule(node.module.id), lessons);
    for (const l of lessons) qc.setQueryData(qk.lesson(l.id), l);
  }
  return tree;
}