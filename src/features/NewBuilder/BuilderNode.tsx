import { StatusButton } from "@/components/Atoms/Button/StatusButton";
import { Button } from "@/components/ui/button";
import { BuilderNodeContainer } from "./BuilderNodeContainer";
import type { ReactNode } from "react";

type BuilderNodeProps = {
  title: string;
  onSelect: () => void;
  isSelected?: boolean;
  status: boolean;
  children: ReactNode;
  onStatusClick?: () => void;
};

export function BuilderNode({
  title,
  onSelect,
  children,
  isSelected,
  onStatusClick,
}: BuilderNodeProps) {
  return (
    <div className="w-full py-1 flex items-center">
      <BuilderNodeContainer onClick={() => onSelect()} isSelected={!!isSelected}>
        <p className="text-lg">{title}</p>
        <div className="flex items-center gap-4">
          {children}
          <StatusButton status="default" />
        </div>
      </BuilderNodeContainer>
    </div>
  );
}
