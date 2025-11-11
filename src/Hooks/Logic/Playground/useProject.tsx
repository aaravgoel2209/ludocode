import type { ProjectFile } from "@/features/Playground/ProjectPage";
import { useCallback, useState } from "react";

export function useProject() {
  const files: ProjectFile[] = [
    { fileName: "main.py", fileType: ".py" },
    { fileName: "card.py", fileType: ".py" },
  ];

  const [currentFileIdx, setCurrentFileIdx] = useState(0);
  const changeFile = useCallback((index: number) => {
    setCurrentFileIdx((prev) => (prev === index ? prev : index));
  }, []);

  return { files, currentFileIdx, changeFile };
}
