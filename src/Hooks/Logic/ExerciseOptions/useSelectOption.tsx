import type { LudoExerciseOption } from "@/Types/Exercise/LudoExerciseOption";
import type { AnswerToken } from "../Input/useInputAssistance";

type Args = {
  option: LudoExerciseOption;
  userResponses: AnswerToken[];
  addSelection: (option: AnswerToken) => void;
};

export function useSelectOption({
  option,
  userResponses,
  addSelection,
}: Args) {
  const norm = (s: string) => s.trim();

  const isSelected = userResponses.some(
    (s) => s.id && option.id && norm(s.id) === norm(option.id)
  );

  const handleClick = () => {
    if (isSelected) return;
    addSelection({ id: option.id, value: option.content });
  };

  return { isSelected, handleClick };
}
