import { ThinNodeButton } from "@/components/design-system/misc/button/thin-node-button.tsx";

type SelectModuleButtonProps = { selectModule: () => void };

export function SelectModuleButton({ selectModule }: SelectModuleButtonProps) {
  return <ThinNodeButton text="Select" onClick={() => selectModule()} />;
}
