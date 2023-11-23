import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 630,
      y: mousePosition.y - 520,
    },
  };
  return (
    <motion.div
      variants={variants}
      animate="default"
      className="cursor"
    ></motion.div>
  );
}

export default CursorEffect;
