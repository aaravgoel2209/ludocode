import { TrashIcon } from "lucide-react";
import { ProjectWinbar } from "../ProjectWinbar.tsx";
import { CircleIconButton } from "@/components/Atoms/Button/CircleIconButton.tsx";

type RunnerWinbarProps = { clearOutput: () => void };

export function RunnerWinbar({ clearOutput }: RunnerWinbarProps) {
  return (
    <ProjectWinbar>
      <div className="flex h-full text-white justify-between items-center">
        <p className="">Output</p>
        <CircleIconButton iconName="TrashIcon" onClick={clearOutput} />
      </div>
    </ProjectWinbar>
  );
}
