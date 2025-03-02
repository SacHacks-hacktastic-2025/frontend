import { motion } from "framer-motion";

const InsightsPanel = ({ commitData, issueData }) => {
  const generateInsights = () => {
    const totalCommits = commitData.reduce((sum, data) => sum + data.count, 0);
    const totalIssues = issueData.reduce((sum, data) => sum + data.count, 0);

    return {
      commitInsight: `You made ${totalCommits} commits today. Great job! Consider focusing on code quality.`,
      issueInsight: `You opened ${totalIssues} issues today. Try to resolve them to improve productivity!`,
    };
  };

  const { commitInsight, issueInsight } = generateInsights();

  return (
    <motion.div
      className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-4">AI-Generated Insights</h3>
      <div className="mb-4">
        <p className="text-sm">{commitInsight}</p>
      </div>
      <div>
        <p className="text-sm">{issueInsight}</p>
      </div>
    </motion.div>
  );
};

export default InsightsPanel;
