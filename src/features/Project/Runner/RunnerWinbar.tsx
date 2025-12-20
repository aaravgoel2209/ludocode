import { Winbar } from "@/components/design-system/zones/winbar.tsx";
import { useCodeRunnerContext } from "@/features/Project/Context/CodeRunnerContext.tsx";
import { IconButton } from "@/components/design-system/primitives/icon-button";

export function RunnerWinbar() {
  const { outputInfo } = useCodeRunnerContext();
  const { clearOutput } = outputInfo;

  return (
    <Winbar>
      <div className="flex h-full text-white justify-between items-center">
        <p className="">Output</p>
        <IconButton iconName="TrashIcon" onClick={clearOutput} />
      </div>
    </Winbar>
  );
}
