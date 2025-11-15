import type { ModuleSnap } from "@/Types/Snapshot/SnapshotTypes";
import { BuilderNode } from "./BuilderNode";
import { TreeItem } from "./TreeItem";
import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";

type ModuleNodeProps = { moduleSnapshot: ModuleSnap };

export function ModuleNode({ moduleSnapshot }: ModuleNodeProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4 pr-4">
        <BuilderNode title={moduleSnapshot.title} status />
        <button
          type="button"
          onClick={() => setIsExpanded((v) => !v)}
          className="flex h-6 w-6 items-center justify-center rounded hover:bg-ludoGrayLight/60"
        >
          <ChevronRightIcon
            className={`h-4 w-4 text-white transition-transform ${
              isExpanded ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>

      <div className={`ml-6 ${isExpanded ? "flex" : "hidden"} flex-col`}>
        {moduleSnapshot.lessons.map((lesson, idx) => (
          <TreeItem key={idx}>
            <BuilderNode title={lesson.title} status />
          </TreeItem>
        ))}
      </div>
    </div>
  );
}
