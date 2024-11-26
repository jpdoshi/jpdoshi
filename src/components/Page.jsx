import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page = (props) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="min-h-[100vh] relative"
      id={props.id ? props.id : "none"}
    >
      <div
        className={
          props.centerContent
            ? "absolute -translate-x-2/4 -translate-y-2/4 left-[50%] top-[50%]"
            : "px-4 md:px-6"
        }
      >
        {props.children}
      </div>
    </motion.div>
  );
};

export default Page;
