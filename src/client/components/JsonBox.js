import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";

const JsonBox = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [validJson, setValidJson] = useState(true);

  const handleInputChange = (editor, data, value) => {
    setJsonInput(value);
    formatJson(value);
  };

  const formatJson = (value) => {
    try {
      if (value !== "") {
        const parsedJson = JSON.parse(value);
        const prettyJson = JSON.stringify(parsedJson, null, 2);
        setJsonInput(prettyJson);
      }
      setValidJson(true);
    } catch (error) {
      setValidJson(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-h-screen">
      <div className="bg-gray-800 text-white py-2 px-4">
        <h2 className="text-lg font-semibold">JSON Formatter</h2>
      </div>
      <div className="flex-grow p-4 bg-gray-900 overflow-hidden">
        <CodeMirror
          value={jsonInput}
          options={{
            mode: "application/json",
            theme: "material",
            lineNumbers: true,
            lineWrapping: true,
            viewportMargin: Infinity,
            tabSize: 2,
            readOnly: false,
          }}
          onBeforeChange={(editor, data, value) => {
            handleInputChange(editor, data, value);
          }}
          onChange={(editor, data, value) => {
            handleInputChange(editor, data, value);
          }}
        />
      </div>
      {!validJson && <div className="text-red-500 p-4">Invalid JSON</div>}
    </div>
  );
};
export default JsonBox;
