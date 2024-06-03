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
      if (jsonString.length === 0) {
        setValidJson(false);
      }
    } catch (error) {
      setValidJson(false);
    }
  };

  // TODO: CONSIDER DEBOUNCING FOR BETTER PERFORMANCE
  const handleChange = (event) => {
    const value = event.target.value;
    setJsonInput(value);

    if (value.trim() === "") {
      setValidJson(true);
      return;
    }

    // Try to format and validate the JSON input
    try {
      const parsedJson = JSON.parse(value);
      const prettyJson = JSON.stringify(parsedJson, null, 2);
      setJsonInput(prettyJson);
      setValidJson(true);
    } catch (error) {
      setValidJson(false);
    }
  };

  return (
    <div className="p-4">
      <p className="mb-2 text-lg font-semibold">JSON</p>
      <textarea
        className={`w-full h-96 p-2 border ${
          validJson ? "border-gray-300" : "border-red-500"
        } rounded`}
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
