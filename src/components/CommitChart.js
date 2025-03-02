import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", commits: 5 },
  { day: "Tue", commits: 8 },
  { day: "Wed", commits: 2 },
  { day: "Thu", commits: 10 },
  { day: "Fri", commits: 7 },
  { day: "Sat", commits: 3 },
  { day: "Sun", commits: 6 },
];

const CommitChart = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl text-white mb-3">Commit Frequency</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1e293b", color: "#fff" }}
          />
          <Bar dataKey="commits" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CommitChart;
