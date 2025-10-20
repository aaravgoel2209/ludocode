import type { LudoLesson } from "./LudoLesson"
import type { LudoModule } from "./LudoModule"

export type ModuleNode = {
    module: LudoModule
    lessons: LudoLesson[]
}