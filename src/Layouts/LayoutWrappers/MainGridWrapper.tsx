import type { ReactNode } from "react";

type MainGridWrapperProps = {
  children: ReactNode;
  gridRows: "FULL" | "SITE";
};

export function MainGridWrapper({ children, gridRows }: MainGridWrapperProps) {
  const rows = {
    FULL: "grid-rows-[auto_1fr_auto]",
    SITE: "grid-rows-[1fr_auto] lg:grid-rows-[auto_1fr]",
  };

  return (
    <div className={`grid ${rows[gridRows]} min-h-0 h-dvh`}>{children}</div>
  );
}
