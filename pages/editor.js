import { useState, useRef } from "react";
import dynamic from "next/dynamic";

const CodeEditor = dynamic(() => import("../components/CodeEditor"), {
  ssr: false,
});

import styles from '../styles/Editor.module.css'

const Editor = () => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const showValue = () => {
    alert(editorRef.current.getValue());
  };
  const [language, setLanguage] = useState("C++");
  return (
    <div className={styles.main}>
      <h1>Code Editor </h1>
      <div class="buttons">
        <select
          name="cars"
          id="cars"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option value="C++">C++</option>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
        </select>
        <button onClick={showValue}>Show value</button>
      </div>
      <div class="window">
        <CodeEditor language={language} onMount={handleEditorDidMount} />
        {/* <div className={styles.compiler}></div> */}
      </div>
    </div>
  );
};

export default Editor;
