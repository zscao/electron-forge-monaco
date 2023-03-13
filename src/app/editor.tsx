import MonacoEditor, { OnMount, OnChange, OnValidate, BeforeMount } from "@monaco-editor/react";

export function Editor() {
  const handleEditorChange: OnChange = (value, event) => {
    // here is the current value
    console.log('onchange: ', value)
  }

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco)
  }

  const handleEditorWillMount: BeforeMount = (monaco) => {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  const handleEditorValidation: OnValidate = (markers) => {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <MonacoEditor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      beforeMount={handleEditorWillMount}
      onValidate={handleEditorValidation}
    />
  );
}