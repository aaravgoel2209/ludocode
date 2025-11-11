import * as monaco from "monaco-editor";
import { useState, useEffect, useCallback } from "react";

export type ProjectFile = { path: string; language: string; content: string };


export function useProject() {
  const [files, setFiles] = useState<ProjectFile[]>([
    { path: 'inmem:///main.py', language: 'python', content: 'print("hi")\n' },
    { path: 'inmem:///card.py', language: 'python', content: '# todo\n' },
  ]);
  const [current, setCurrent] = useState(0);

  const updateContent = useCallback((val: string) => {
    setFiles(fs => {
      const next = fs.slice();
      next[current] = { ...next[current], content: val };
      return next;
    });
  }, [current]);

  return {
    files,
    current,
    active: files[current],
    setCurrent,
    updateContent,
  };
}