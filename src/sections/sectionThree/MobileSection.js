import React from "react";
import moriaData from "../../database/moriaData";
import AnimatedHeader from "../../components/AnimatedHeader";
import { staggerOpacity, imageOpacity } from "../../framerMotion/motionValues";
import { motion } from "framer-motion";
import ScrollNumbers from "./ScrollNumbers";

function MobileSection() {
  return (
    <div className="mobile-size m-1 row-c">
      <ScrollNumbers />
      <div className="w-8">
        {moriaData.map((item) => {
          return (
            <div key={item.id} className="ml-1 mr-1 mb-2 mt-2">
              <div className="column-c align-i-c">
                <div className="w-full mw-350">
                  <AnimatedHeader
                    className="font-f-primary mr-2 font-s-sm"
                    text={item.header}
                  />
                </div>
                <motion.div
                  variants={imageOpacity}
                  initial="hidden"
                  whileInView="visible"
                  className="w-300 h-300"
                >
                  <img
                    className="w-full h-full"
                    src={item.image}
                    alt="data-image"
                  />
                </motion.div>
                <p className="color-grey mw-500 p-1 font-f-secondary line-h-20 text-a-c responsive-p">
                  {item.info}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileSection;
