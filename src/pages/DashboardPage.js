import { motion } from "framer-motion";
import ActivityTimeline from "../components/ActivityTimeline";
import CommitSummary from "../components/CommitSummary";
import IssueSummary from "../components/IssueSummary";
import InsightsPanel from "../components/InsightsPanel";
import Charts from "../components/Charts";

const DashboardPage = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <motion.h1
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Developer Retrospective
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <CommitSummary />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <IssueSummary />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <InsightsPanel />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Charts />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <ActivityTimeline />
      </motion.div>
    </div>
  );
};

export default DashboardPage;
