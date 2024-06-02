import React, { useState } from "react";

const JsonBox = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [validJson, setValidJson] = useState(true);

  const handlePaste = (event) => {
    // Prevent the default paste behavior
    event.preventDefault();

    // Get the pasted text
    const pastedText = event.clipboardData.getData("text");
    const jsonString = pastedText.replace(/(\w+):/g, '"$1":');

    // Try to format the pasted JSON
    try {
      const parsedJson = JSON.parse(jsonString);
      const prettyJson = JSON.stringify(parsedJson, null, 2);
      setJsonInput(prettyJson);
      setValidJson(true);
    } catch (error) {
      setValidJson(false);
    }
  };

  const handleChange = (event) => {
    setJsonInput(event.target.value);
  };

  return (
    <div>
      <p>JSON</p>
      <textarea
        rows={30}
        cols={60}
        onPaste={handlePaste}
        value={jsonInput}
        onChange={handleChange}
        placeholder="paste JSON here..."
      />
      <p>{!validJson && "Invalid Json"}</p>
    </div>
  );
};

export default JsonBox;
