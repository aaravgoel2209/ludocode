import type { ReactNode } from "react";

type SubGridWrapperProps = {
  children: ReactNode;
};

export function SubGridWrapper({children}: SubGridWrapperProps) {

  return <div className={`grid grid-rows-[auto_1fr] min-h-0`}>{children}</div>;
}
