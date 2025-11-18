import { BuilderNodeContainer } from "../../Molecules/Sidebar/BuilderNodeContainer";
import type { ReactNode } from "react";

type BuilderNodeProps = {
  title: string;
  isSelected?: boolean;
  status: boolean;
  children: ReactNode;
};

export function BuilderNode({ title, children, isSelected }: BuilderNodeProps) {
  return (
    <div className="w-full py-1 flex items-center">
      <BuilderNodeContainer isSelected={!!isSelected}>
        <p className="text-lg">{title}</p>
        <div className="flex items-center gap-4">{children}</div>
      </BuilderNodeContainer>
    </div>
  );
}
