import React, { useState } from "react";
import JsonBox from "./client/components/JsonBox";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto p-4 h-full">
        <JsonBox />
      </div>
    </div>
  );
};

export default App;
