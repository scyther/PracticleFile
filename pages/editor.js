import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const CodeEditor = dynamic(() => import("../components/CodeEditor"), {
  ssr: false,
});

import styles from "../styles/Editor.module.css";

const Editor = () => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    editor.updateOptions({ contextmenu: false });
    editor.onKeyDown((event) => {
      const { keyCode, ctrlKey, metaKey } = event;
      if ((keyCode === 52 || 33) && (metaKey || ctrlKey)) {
        event.preventDefault();
      }
    });
    editor.getAction('actions.find')._precondition.expr[0] = "o"

  };

  const showValue = () => {
    alert("Assignment Submitted Successfully");
  };
  const [language, setLanguage] = useState("C++");
  return (
    <div
      className={styles.main}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.compilerContainer}>
        <h1>Question</h1>
        <div className={styles.compiler}>
          <p style={{ color: "white", margin: "15px" }}>
            {" "}
            Write a Program to Find sum of two Numbers ?
          </p>
        </div>
      </div>
      <div className={styles.editor}>
        <h1>Code Editor </h1>

        <div class="buttons">
          <select
            name="cars"
            id="cars"
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="C++">C++</option>
            <option value="Python">Python</option>
          </select>
          <button onClick={showValue}>Submit</button>
        </div>
        <CodeEditor language={language} onMount={handleEditorDidMount} />
      </div>
    </div>
  );
};

export default Editor;
