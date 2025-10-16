import type { ReactNode } from "react";

type LessonFooterProps = {
  children: ReactNode;
  bgColor?: string;
};

export function LessonFooter({
  children,
  bgColor = "bg-ludoGrayLight",
}: LessonFooterProps) {
  return (
    <footer className={`col-span-full grid grid-cols-12 min-h-24 ${bgColor}`}>
      {children}
    </footer>
  );
}
