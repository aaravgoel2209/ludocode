import type { ExerciseType } from "./ExerciseType";
import type { LudoExerciseOption } from "./LudoExerciseOption";

export type LudoExercise = {
  id: number;
  lessonId: number;
  title: string;
  prompt?: string;
  exerciseType: ExerciseType;
  exerciseOptions: LudoExerciseOption[];
};
