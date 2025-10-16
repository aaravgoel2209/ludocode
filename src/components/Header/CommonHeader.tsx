import type { ReactNode } from "react";

type CommonHeaderProps = {
    children: ReactNode;
    bgColor?: string;
}

export function CommonHeader({ children, bgColor="bg-ludoGrayLight" }: CommonHeaderProps) {
  return (
    <nav className={`col-span-full grid border-b-2 border-b-pythonYellow grid-cols-12 min-h-18 ${bgColor}`}>
        {children}
    </nav>
  );
}
