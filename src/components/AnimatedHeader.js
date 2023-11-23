import React from "react";
import { animatedHeader } from "../framerMotion/motionValues";
import { motion } from "framer-motion";

function AnimatedHeader({ text, className }) {
  const words = text.split(" ");

  return (
    <motion.div
      variants={animatedHeader}
      initial="hidden"
      whileInView="visible"
      className="row-c m-2 text-a-c overflow-h"
    >
      {words.map((word, index) => {
        return (
          <motion.span
            variants={animatedHeader}
            className={className}
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export default AnimatedHeader;
