import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.nav
      className={`p-4 ${darkMode ? "bg-gray-900" : "bg-gray-200"} shadow-md`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 className="text-lg font-bold" whileHover={{ scale: 1.1 }}>
          Dev Retrospective
        </motion.h1>
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-500 text-white rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
