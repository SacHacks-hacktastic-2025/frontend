import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { fetchGitHubData } from "../utils/GitHubService";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const Charts = () => {
  const [commitData, setCommitData] = useState([]);
  const [issueData, setIssueData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    fetchGitHubData(startDate, endDate).then((data) => {
      const commitCounts = {};
      const issueCounts = {};

      data.commits.forEach((commit) => {
        const date = new Date(commit.timestamp).toLocaleDateString();
        commitCounts[date] = (commitCounts[date] || 0) + 1;
      });

      data.issues.forEach((issue) => {
        const date = new Date(issue.timestamp).toLocaleDateString();
        issueCounts[date] = (issueCounts[date] || 0) + 1;
      });

      setCommitData(
        Object.entries(commitCounts).map(([date, count]) => ({ date, count }))
      );
      setIssueData(
        Object.entries(issueCounts).map(([date, count]) => ({ date, count }))
      );
    });
  }, [startDate, endDate]);

  return (
    <motion.div
      className="p-6 bg-gray-800 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-bold text-center mb-4">
        GitHub Activity Overview
      </h2>

      <div className="mb-4">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-lg font-semibold text-center">Commits Per Day</h3>
          <Bar
            data={{
              labels: commitData.map((d) => d.date),
              datasets: [
                {
                  label: "Commits",
                  data: commitData.map((d) => d.count),
                  backgroundColor: "#4CAF50",
                },
              ],
            }}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>

        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-lg font-semibold text-center">
            Issues Opened Per Day
          </h3>
          <Line
            data={{
              labels: issueData.map((d) => d.date),
              datasets: [
                {
                  label: "Issues",
                  data: issueData.map((d) => d.count),
                  borderColor: "#F44336",
                  fill: false,
                },
              ],
            }}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Charts;
