import React from "react";
import back from "../../assets/image-background.webp";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxBack() {
  let { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  let scale = useTransform(scrollYProgress, [0, 1], ["100%", "190%"]);

  return (
    <div className="w-full h-full overflow-h index-n1 position-a top-0 left-0">
      <motion.img
        style={{ scale }}
        className="w-full h-full vertical-a-top filter-br-large"
        src={back}
        alt="back"
      />
    </div>
  );
}

export default ParallaxBack;
