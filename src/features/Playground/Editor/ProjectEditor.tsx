import Editor, { type BeforeMount, type OnMount } from "@monaco-editor/react";
type ProjectEditorProps = {};

export function ProjectEditor({}: ProjectEditorProps) {
  const beforeMount: BeforeMount = (monaco) => {
    monaco.editor.defineTheme("custom-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#22273E",
        "editorGutter.background": "#22273E",
      },
    });
  };

  const onMount: OnMount = (editor, monaco) => {
    monaco.editor.setTheme("custom-theme"); // ensure applied
  };

  return (
    <Editor
      height="100%"
      theme="custom-theme"
      beforeMount={beforeMount}
      onMount={onMount}
      language="python"
      options={{
        minimap: { enabled: false },
        fontSize: 16,
        padding: { top: 16, bottom: 16 },
        scrollBeyondLastLine: false,
        cursorSurroundingLines: 8,
        cursorSurroundingLinesStyle: "all",
        renderLineHighlight: "none",
        renderLineHighlightOnlyWhenFocus: false,
      }}
    />
  );
}
