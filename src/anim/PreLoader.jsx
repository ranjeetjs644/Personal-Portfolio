import React from "react";
import { motion } from "framer-motion";

const Hexagon = () => (
  <svg
    viewBox="0 0 100 100"
    width="200"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
    className="to-blue-950"
  >
    <motion.polygon
      points="50,10 90,30 90,70 50,90 10,70 10,30"
      stroke="#0095D9"
      strokeWidth="3"
      fill="transparent"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      view
      className="custom-glow"
    />
  </svg>
);

const PreLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }} // Animation occurs only once
      className="w-screen h-screen bg-gray-950 flex items-center justify-center z-50"
    >
      <div className="relative flex items-center justify-center">
        {/* Hexagon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Hexagon />
        </motion.div>

        {/* Letter */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          style={{ fontSize: "100px", color: "gray" }}
          className="absolute text-gray-300 font-extrabold font-Inter"
        >
          R
        </motion.span>
      </div>
    </motion.div>
  );
};

export default PreLoader;
