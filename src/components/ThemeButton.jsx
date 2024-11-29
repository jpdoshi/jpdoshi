import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

const ThemeButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      toggleTheme();
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--bg-color", "#000");
      document.documentElement.style.setProperty("--text-color", "#fafafa");

      setTheme("dark");
    }

    if (theme === "dark") {
      document.documentElement.style.setProperty("--bg-color", "#fafafa");
      document.documentElement.style.setProperty("--text-color", "#000");

      setTheme("light");
    }
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.25,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="btn fixed bottom-0 right-0 m-6"
      onClick={() => {
        toggleTheme();
      }}
    >
      <i className="las la-adjust text-3xl md:text-4xl" />
    </motion.button>
  );
};

export default ThemeButton;
