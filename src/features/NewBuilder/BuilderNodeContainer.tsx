import type { ReactNode } from "react";

type BuilderNodeContainerProps = { children: ReactNode; isSelected: boolean };

export function BuilderNodeContainer({
  children,
  isSelected,
}: BuilderNodeContainerProps) {
  return (
    <div className="w-full hover:cursor-pointer rounded-xl hover:bg-ludoLightPurple/20 flex justify-between items-center px-3 py-2 ">
      {children}
    </div>
  );
}
