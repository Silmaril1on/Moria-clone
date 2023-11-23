import React from "react";
import BorderSvg from "../../components/BorderSvg";
import { slideRight, staggerOpacity } from "../../framerMotion/motionValues";
import { motion } from "framer-motion";

function SideList() {
  const list = ["news & updates", "community", "media", "support"];

  return (
    <motion.aside
      variants={slideRight}
      initial="hidden"
      animate="visible"
      className="position-a top-15 bg-black p-5 m-n2 column-c align-i-c left-40 w-500 h-auto"
    >
      <BorderSvg />
      <motion.div variants={staggerOpacity}>
        <motion.div
          variants={staggerOpacity}
          initial="hidden"
          animate="visible"
          className="color-white grey-hover w-300 mt-6 mb-6 pt-6 font-f-primary text-t-cap"
        >
          {list.map((link, index) => {
            return (
              <motion.h1
                key={index}
                variants={staggerOpacity}
                className="font-s-md white-hover font-w-400 time-sm cursor-p m-3 p-2 primary-line letter-s-xs"
              >
                {link}
              </motion.h1>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.aside>
  );
}

export default SideList;
