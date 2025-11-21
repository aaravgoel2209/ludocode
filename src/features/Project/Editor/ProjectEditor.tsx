import { useMonacoTheme } from "@/Hooks/UI/useMonacoTheme";
import Editor from "@monaco-editor/react";
type ProjectEditorProps = {
  path: string;
  language: string;
  value: string;
  onChange: (v: string) => void;
};

export function ProjectEditor({
  path,
  language,
  value,
  onChange,
}: ProjectEditorProps) {
  const { beforeMount, editorOptions } = useMonacoTheme();

  return (
    <Editor
      path={path}
      height="100%"
      theme="custom-theme"
      value={value}
      onChange={(v) => onChange(v ?? "")}
      beforeMount={beforeMount}
      language={language}
      options={editorOptions}
    />
  );
}
