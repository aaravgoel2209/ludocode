import type { LudoCourse } from "./LudoCourse"
import type { ModuleNode } from "./ModuleNode"

export type CourseTree = {
    course: LudoCourse,
    modules: ModuleNode[]
}