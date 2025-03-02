import { motion } from "framer-motion";

const CommitSummary = ({ commits }) => {
  return (
    <ul>
      {commits.map((commit, index) => (
        <motion.li
          key={index}
          className="p-3 bg-gray-700 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {commit.message}
        </motion.li>
      ))}
    </ul>
  );
};

export default CommitSummary;
