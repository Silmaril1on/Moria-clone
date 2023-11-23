import React from "react";
import right from "../../assets/image-right.webp";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxRight() {
  let { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <div className="w-full h-full overflow-h index-n1 position-a top-0 left-0">
      <motion.img
        style={{ y }}
        className="w-full h-full"
        src={right}
        alt="back"
      />
    </div>
  );
}

export default ParallaxRight;
