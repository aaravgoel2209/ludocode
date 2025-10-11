import type { ExerciseType } from "./ExerciseType";
import type { LudoExerciseOption } from "./LudoExerciseOption";

export type LudoExercise = {
    id: number;
    tutorialId: number;
    prompt: string;
    answerField: string;
    orderIndex: number;
    type: ExerciseType;
    options: LudoExerciseOption[];
}