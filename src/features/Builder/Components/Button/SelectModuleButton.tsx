import { ThinNodeButton } from "@/features/Builder/Components/Button/thin-node-button";

type SelectModuleButtonProps = { selectModule: () => void };

export function SelectModuleButton({ selectModule }: SelectModuleButtonProps) {
  return <ThinNodeButton text="Select" onClick={() => selectModule()} />;
}
