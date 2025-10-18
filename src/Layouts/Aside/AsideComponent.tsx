import type { ReactNode } from "react";

type AsideComponentProps = {
    children: ReactNode;
    orientation: "LEFT" | "RIGHT";
    paddingY?: string;
    paddingX?: string;
};

export function AsideComponent({children, orientation, paddingY = "py-6", paddingX = "px-6"}: AsideComponentProps) {
  
    const border = orientation == "LEFT" ? "border-r" : "border-l"
  
    return (
    <aside className={`hidden lg:block col-start-9 col-end-12 h-full ${border} border-ludoGrayLight`}>
      <div className={`sticky top-0 ${paddingY} ${paddingX}`}>
        {children}
      </div>
    </aside>
  );
}
