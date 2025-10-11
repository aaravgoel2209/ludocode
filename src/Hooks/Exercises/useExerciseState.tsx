import { useCallback, useState } from "react";

export function useExerciseState() {
  const options = ["let", "=", "1"];
  const prompt = "___ score ___ ___";

  const [userResponses, setUserResponses] = useState<string[]>(["", "", ""]);

  const setAnswerAt = useCallback((index: number, value: string) => {
    const trimmed = value.trim();
    setUserResponses((prev) => {
      const copy = [...prev];
      copy[index] = trimmed;
      return copy;
    });
  }, []);

  const addAnswer = useCallback((value: string) => {
    const trimmed = value.trim();
    setUserResponses((prev) => {
      const tempArray = [...prev];
      const firstSlot = tempArray.findIndex((slot) => slot === "");
      if (firstSlot === -1) return tempArray;
      tempArray[firstSlot] = trimmed;
      return tempArray;
    });
  }, []);
  const allFilled = userResponses.every((slot) => slot.trim() !== "");
  const allValid = userResponses.every((slot) => options.includes(slot.trim()));
  const canSubmit = allFilled && allValid;

  return { options, prompt, userResponses, setAnswerAt, addAnswer, canSubmit };
}
