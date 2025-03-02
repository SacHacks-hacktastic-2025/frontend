import React, { useState } from "react";

const GPTInsights = () => {
  const [insights, setInsights] = useState("Analyzing your activity...");

  // Simulate API call
  const fetchInsights = () => {
    setTimeout(() => {
      setInsights(
        "You committed 8 times today! Keep up the momentum. Consider adding more issue references in your commits for better tracking."
      );
    }, 2000);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl text-white mb-3">AI Insights</h2>
      <p className="text-gray-400">{insights}</p>
      <button
        onClick={fetchInsights}
        className="mt-3 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
      >
        Refresh Insights
      </button>
    </div>
  );
};

export default GPTInsights;
