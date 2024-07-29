import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial state
      whileInView={{ opacity: 1, y: 0 }} // State when in view
      transition={{
        duration: 0.6,
        delay,
        // ease: [0.42, 0, 0.58, 1], // Custom easing function
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
