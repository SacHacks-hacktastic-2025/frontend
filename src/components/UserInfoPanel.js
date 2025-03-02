import React from "react";
import { motion } from "framer-motion";

const UserInfoPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg"
    >
      <img
        src="https://avatars.githubusercontent.com/u/9919?v=4"
        alt="User Avatar"
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-2xl font-semibold">Username</h2>
        <p className="text-gray-400">GitHub Stats</p>
      </div>
    </motion.div>
  );
};

export default UserInfoPanel;
