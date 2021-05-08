import Editor from "@monaco-editor/react";

const CodeEditor = ({ language, onMount }) => {
    console.log(language)
  return (
    <Editor
      theme="vs-dark"
      height="400px"
      width="500px"
      defaultLanguage="C++"
      defaultValue="// write your code here"
      language={language}
      onMount={onMount}
      contextmenu="false"
    />
  );
};

export default CodeEditor;
