import React from "react";
import left from "../../assets/image-left.webp";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxLeft() {
  let { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <div className="w-full h-full overflow-h index-n1 position-a top-0 left-0">
      <motion.img
        style={{ y }}
        className="w-full h-full"
        src={left}
        alt="back"
      />
    </div>
  );
}

export default ParallaxLeft;
