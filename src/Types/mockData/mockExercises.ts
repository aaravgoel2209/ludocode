import type { LudoExercise } from "../Exercise/LudoExercise";
import type { LudoExerciseOption } from "../Exercise/LudoExerciseOption";
import type { LudoLesson } from "../Exercise/LudoLesson";

export const mockLessons: LudoLesson[] = [
    {
        id: 1,
        unitId: 1,
        orderIndex: 1,
        title: "Variables",
        isPassed: false
    }
]

export const mockExercises: LudoExercise[] = [
  {
    id: 1,
    tutorialId: 1,
    prompt: "Create a new variable called score and set its value to 1",
    answerField: "___ score ___ ___",
    orderIndex: 1,
    type: "CLOZE",
    options: [
      {
        id: 1,
        exerciseId: 1,
        content: "let",
      },
      {
        id: 2,
        exerciseId: 1,
        content: "=",
      },
      {
        id: 3,
        exerciseId: 1,
        content: "let",
      },
    ],
  },
];
