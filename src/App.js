import React from "react";
import Navbar from "./components/Navbar";
import Charts from "./components/Charts";
import InsightsPanel from "./components/InsightsPanel";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto p-6">
        <Charts />
        <InsightsPanel />
      </div>
    </div>
  );
}

export default App;
