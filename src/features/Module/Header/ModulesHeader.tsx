import { Bars3Icon, FireIcon, HeartIcon } from "@heroicons/react/24/solid";
import { CommonHeader } from "../../../components/Header/CommonHeader";
import { CommitIcon } from "../../../components/HeroIcons/CustomIcon";
import { HollowSlot } from "./HollowSlot";
type ModulesHeaderProps = {};

export function ModulesHeader({}: ModulesHeaderProps) {
  return (
    <CommonHeader>
      <div className="col-start-2 col-end-12 flex py-2 gap-2 flex-col items-center justify-center">
        <div className="flex w-full justify-center gap-2 items-center">
          <HollowSlot text={6}>
            <HeartIcon className="h-7 text-red-400" />
          </HollowSlot>
          <HollowSlot text={6}>
            <CommitIcon className="h-7 text-pythonYellow" />
          </HollowSlot>
          <HollowSlot text={6}>
            <FireIcon className="h-7 text-orange-400" />
          </HollowSlot>
        </div>
        <HollowSlot text={"Python"}>
          <Bars3Icon className="h-7 text-white" />
        </HollowSlot>
      </div>
    </CommonHeader>
  );
}
