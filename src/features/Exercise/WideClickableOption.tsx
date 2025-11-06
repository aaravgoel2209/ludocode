import type { AnswerToken } from "@/Hooks/Logic/Input/useInputAssistance";
import type { LudoExerciseOption } from "@/Types/Exercise/LudoExerciseOption";

type WideClickableOptionProps = {
    option: LudoExerciseOption;
  userSelections: AnswerToken[];
  setAnswerAt: (index: number, value: AnswerToken) => void;
  isCorrect? : boolean;
};

export function WideClickableOption({option, userSelections, setAnswerAt}: WideClickableOptionProps) {

    const isSelected = userSelections[0].id == option.id;

    const stateStyle = isSelected ? `border-ludoLightPurple` : 'border-ludoGrayLight'

    const handleChange = () => {
        if (isSelected) return;
        setAnswerAt(0, {id: option.id, value: option.content});
    }
  
    return (
        <div onClick={() => handleChange()} className={`w-full ${stateStyle} border-2 px-6 py-2 bg-ludoGrayLight rounded-lg `}>
            <p className="text-left text-white">{option.content}</p>
        </div>
  );
}