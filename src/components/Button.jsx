import React from "react";

import { motion } from "framer-motion";

const Button = ({ onClick, children }) => {
  return (
    <motion.button
      initial={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
      whileHover={{
        scale: 1.15,
        backgroundColor: "var(--text-color)",
        color: "var(--bg-color)",
      }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
      }}
      className="btn text-lg px-4 py-2 block w-full md:w-auto rounded border border-[var(--text-color)]"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
