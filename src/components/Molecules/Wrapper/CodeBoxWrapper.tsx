import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CodeBoxWrapperProps = {
  children: ReactNode;
  header?: boolean;
  className?: string;
  innerClassName?: string;
};

export function CodeBoxWrapper({
  children,
  header = true,
  className,
  innerClassName,
}: CodeBoxWrapperProps) {
  return (
    <div
      className={cn(
        "w-full min-h-40 lg:min-h-66 rounded-3xl bg-ludoGrayLight",
        className
      )}
    >
      {header && <div className="w-full h-6 rounded-t-3xl bg-ludoDarkPurple" />}
      <div className={cn("w-full h-full p-6", innerClassName)}>
        {children}
      </div>
    </div>
  );
}