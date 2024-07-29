import { motion, useAnimationControls } from "framer-motion";
const TextSpan = ({ children }) => {
  const controls = useAnimationControls();

  const rubberBand = () => {
    controls.start({
      scale: [1, 1.2, 0.75, 1.18, 0.8, 1],
      transition: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
    });
  };

  return (
    <motion.span
      initial={{ scale: 1 }}
      animate={controls}
      onMouseEnter={rubberBand}
      className="hover:text-gray-600"
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
