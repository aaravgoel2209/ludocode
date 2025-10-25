import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  areAllFilled,
  areAllValid,
  checkCorrect,
  getGapCount,
} from "./exerciseHelpers";
import {
  useAttemptBuffer,
  type AttemptBufferResponse,
} from "./useAttemptBuffer";
import type {
  ExerciseAttempt,
  ExerciseSubmission,
  LessonSubmission,
} from "../../../Types/Exercise/LessonSubmissionTypes";
import type { LudoExercise } from "../../../Types/Exercise/LudoExercise";
import type { LudoLesson } from "../../../Types/Catalog/LudoLesson";
import { router } from "../../../routes/router";
import { ludoNavigation } from "../../../routes/ludoNavigation";

type Args = {
  exercises: LudoExercise[];
  lesson: LudoLesson;
  position: number;
};

export function useExerciseFlow({
  exercises,
  lesson,
  position,
}: Args): ExerciseFlowResponse {
  const [exerciseSubmissions, setExerciseSubmissions] = useState<
    ExerciseSubmission[]
  >([]);

  const index = position - 1;

  const didNavigateRef = useRef(false);

  const [submissionBuffer, setSubmissionBuffer] =
    useState<ExerciseAttempt | null>(null);

  const currentExercise = exercises[index];
  const gapCount = getGapCount(currentExercise);

  const bufferState = useAttemptBuffer({
    exerciseId: currentExercise.id,
    gapCount: gapCount,
    submissions: exerciseSubmissions,
  });

  const { buffer, clear } = bufferState;

  const addAttempt = useCallback((attempt: ExerciseAttempt) => {
    const exerciseId = attempt.exerciseId;
    setExerciseSubmissions((prev) => {
      const existing = prev.find((s) => s.exerciseId === exerciseId);
      if (!existing) {
        return [...prev, { exerciseId, attempts: [attempt] }];
      }
      return prev.map((s) =>
        s.exerciseId === exerciseId
          ? { ...s, attempts: [...s.attempts, attempt] }
          : s
      );
    });
  }, []);

  const allSlotsFilled = areAllFilled(buffer);
  const allSlotsValid = allSlotsFilled && areAllValid(buffer, currentExercise);

  useEffect(() => {
    if (didNavigateRef.current) return;
    if (
      exerciseSubmissions.length == exercises.length &&
      position >= exercises.length
    ) {
      didNavigateRef.current = true;
      const lessonSubmission: LessonSubmission = {
        id: uuidv4(),
        lessonId: lesson.id,
        submissions: exerciseSubmissions,
      };

      router.navigate(
        ludoNavigation.lesson.toSyncPage(lesson.id, lessonSubmission)
      );
    }
  }, [exerciseSubmissions, position]);

  const submitAttemptBuffer = useCallback(() => {
    if (!allSlotsValid) return;
    const isCorrect = checkCorrect(buffer, currentExercise);
    console.log("Buffer: " + JSON.stringify(buffer));
    console.log(
      "EXERCISEOPTS: " + JSON.stringify(currentExercise.exerciseOptions)
    );

    console.log("IS CORRECT" + isCorrect);
    setSubmissionBuffer({
      exerciseId: currentExercise.id,
      isCorrect,
      answer: [...buffer],
    });
  }, [allSlotsValid, buffer, currentExercise]);

function mergeAttempt(
  subs: ExerciseSubmission[],
  attempt: ExerciseAttempt
): ExerciseSubmission[] {
  const i = subs.findIndex(s => s.exerciseId === attempt.exerciseId);
  if (i === -1) return [...subs, { exerciseId: attempt.exerciseId, attempts: [attempt] }];
  const next = subs.slice();
  next[i] = { ...next[i], attempts: [...next[i].attempts, attempt] };
  return next;
}

const commitAttempt = useCallback(() => {
  if (!submissionBuffer) return;

  const isLast = position === exercises.length;

  if (submissionBuffer.isCorrect && isLast) {
    const submissions = mergeAttempt(exerciseSubmissions, submissionBuffer);
    const lessonSubmission: LessonSubmission = {
      id: uuidv4(),
      lessonId: lesson.id,
      submissions,
    };

    console.log("Commited")

    router.navigate(
      ludoNavigation.lesson.toSyncPage(lesson.id, lessonSubmission),
    );
    return;
  }

  // normal flow
  setSubmissionBuffer(null);
  if (submissionBuffer.isCorrect) {
    setExerciseSubmissions((prev) => mergeAttempt(prev, submissionBuffer));
    router.navigate(ludoNavigation.lesson.toNextExercise(lesson.id, position));
  } else {
    clear();
  }
}, [submissionBuffer, exerciseSubmissions, lesson.id, position, exercises.length, clear]);

  return {
    currentExercise,
    bufferState,
    submissionBuffer,
    submitAttemptBuffer,
    commitAttempt,
    canSubmit: allSlotsValid,
  };
}

export type ExerciseFlowResponse = {
  currentExercise: LudoExercise;
  bufferState: AttemptBufferResponse;
  submissionBuffer: ExerciseAttempt | null;
  submitAttemptBuffer: () => void;
  commitAttempt: () => void;
  canSubmit: boolean;
};
