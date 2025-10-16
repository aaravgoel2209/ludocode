import type { ReactNode } from "react";
import {
  HeroIcon,
  type IconName,
} from "../../../components/HeroIcons/HeroIcon";

type HollowSlotProps = {
  children: ReactNode;
  gap?: string;
};

export function HollowSlot({ children, gap = "gap-2"}: HollowSlotProps) {
  return (
    <div className={`flex h-full ${gap} px-3 py-2 rounded-lg bg-ludoGrayDark justify-center items-center`}>
      {children}
    </div>
  );
}
