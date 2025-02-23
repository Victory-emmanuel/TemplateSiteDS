/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const WaveDivider = ({ position = "top", className = "" }) => {
  return (
    <motion.div
      className={`absolute left-0 w-full overflow-hidden leading-0 ${
        position === "top" ? "top-0" : "bottom-0"
      } ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg
        className="relative block w-full h-24 md:h-36"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ transform: position === "bottom" ? "rotate(180deg)" : "none" }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-primary dark:fill-secondary"
        />
      </svg>
    </motion.div>
  );
};

export default WaveDivider;
