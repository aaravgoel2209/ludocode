import type { ReactNode } from "react";

type MainGridWrapperProps = {
  children: ReactNode;
  gridRows: "FULL" | "OUTLET_FOOTER"
};

export function MainGridWrapper({ children, gridRows }: MainGridWrapperProps) {

  const rows = {
    "FULL": "grid-rows-[auto_1fr_auto]",
    "OUTLET_FOOTER": "grid-rows-[1fr_auto]"
  }

  return <div className={`grid ${rows[gridRows]} min-h-0 h-dvh`}>{children}</div>;
}
