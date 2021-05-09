import Editor from "@monaco-editor/react";

const CodeEditor = ({ language, onMount }) => {
    console.log(language)
  return (
    <Editor
      theme="vs-dark"
      height="400px"
      width="450px"
      defaultLanguage="javascript"
      defaultValue="// write your code here"
      language={language}
      onMount={onMount}
    />
  );
};

export default CodeEditor;
