import React from "react";
import moriaData from "../../database/moriaData";
import { imageOpacity } from "../../framerMotion/motionValues";
import { motion } from "framer-motion";

function ScrollImage() {
  return (
    <div className="w-full">
      {moriaData.map((img) => {
        return (
          <motion.div
            variants={imageOpacity}
            initial="hidden"
            whileInView="visible"
            className="mt-6 mb-6 column-c align-i-c w-full h-600"
            key={img.id}
          >
            <img className="w-8 h-auto" src={img.image} alt="moria" />
          </motion.div>
        );
      })}
    </div>
  );
}

export default ScrollImage;
