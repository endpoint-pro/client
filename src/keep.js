// import React, { useState } from "react";

// const JsonBox = () => {
//   const [jsonInput, setJsonInput] = useState("");
//   const [validJson, setValidJson] = useState(true);

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     try {
//       const parsedJson = JSON.parse(value);
//       const prettyJson = JSON.stringify(parsedJson, null, 2);
//       setJsonInput(prettyJson);
//       setValidJson(true);
//     } catch (error) {
//       setJsonInput(value);
//       setValidJson(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-full max-h-screen">
//       <div className="bg-gray-800 text-white py-2 px-4">
//         <h2 className="text-lg font-semibold">JSON Formatter</h2>
//       </div>
//       <div className="flex-grow p-4 bg-gray-900 overflow-hidden">
//         <textarea
//           className={`w-full h-full p-2 border ${
//             validJson ? "border-gray-600" : "border-red-500"
//           } rounded bg-gray-800 text-white outline-none`}
//           style={{
//             fontFamily: "monospace",
//             resize: "none",
//             minWidth: "100%",
//             minHeight: "400px",
//           }}
//           value={jsonInput}
//           onChange={handleInputChange}
//           placeholder="Paste or type JSON here..."
//         />
//       </div>
//       {!validJson && <div className="text-red-500 p-4">Invalid JSON</div>}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="max-w-4xl mx-auto p-4 h-full">
//         <JsonBox />
//       </div>
//     </div>
//   );
// };
// export default App
