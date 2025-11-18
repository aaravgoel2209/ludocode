import type { ExerciseType } from "@/Types/Exercise/ExerciseType";
import type { ExerciseSnap } from "@/Types/Snapshot/SnapshotTypes";

type ExerciseFactoryMap = {
  [K in ExerciseType]: () => Extract<ExerciseSnap, { exerciseType: K }>;
};

export const newExercises: ExerciseFactoryMap = {
  INFO: () => ({
    id: crypto.randomUUID(),
    exerciseType: "INFO",
    title: "This is an answerless exercise",
    subtitle: "It is just for info",
    media: null,
    prompt: null,
    correctOptions: [],
    distractors: [],
  }),

  ANALYZE: () => ({
    id: crypto.randomUUID(),
    exerciseType: "ANALYZE",
    title: "What does the following code print?",
    subtitle: "",
    media: null,
    prompt: "print(2 + 2)",
    correctOptions: [],
    distractors: [],
  }),

  CLOZE: () => ({
    id: crypto.randomUUID(),
    exerciseType: "CLOZE",
    title: "Fill in the blanks",
    subtitle: "",
    media: null,
    prompt: "print(___)",
    correctOptions: [],
    distractors: [],
  }),

  TRIVIA: () => ({
    id: crypto.randomUUID(),
    exerciseType: "TRIVIA",
    title: "What does the print statement do?",
    subtitle: "",
    media: null,
    prompt: "",
    correctOptions: [],
    distractors: [],
  }),
};
