import React from "react";
import moriaData from "../../database/moriaData";
import AnimatedHeader from "../../components/AnimatedHeader";
import { imageOpacity } from "../../framerMotion/motionValues";
import { motion } from "framer-motion";

function ScrollContent() {
  return (
    <div className="w-full">
      {moriaData.map((info) => {
        return (
          <div className="h-600 mt-6 mb-6 column-c align-i-c" key={info.id}>
            <h1 className="w-full mw-450 display-f pl-5 m-3">
              <AnimatedHeader
                className="font-f-primary  mr-2 font-s-md"
                text={info.header}
              />
            </h1>
            <motion.p
              variants={imageOpacity}
              initial="hidden"
              whileInView="visible"
              className="responsive-p line-h-30 color-grey font-f-secondary mw-450"
            >
              {info.info}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

export default ScrollContent;
