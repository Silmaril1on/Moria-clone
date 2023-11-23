import React from "react";
import image from "../../assets/image-global.webp";
import AnimatedHeader from "../../components/AnimatedHeader";
import { imageOpacity } from "../../framerMotion/motionValues";
import { motion } from "framer-motion";
import BorderSvg from "../../components/BorderSvg";
import { FaDiscord } from "react-icons/fa";
import logo from "../../assets/logo.webp";
import me from "../../assets/me.png";
import north from "../../assets/north.png";
import freeRange from "../../assets/freeRange.png";

function SectionFive() {
  return (
    <section className="w-full primary-line mb-2 h-full mt-7 color-white position-r column-c">
      <div className="w-full position-a top-0 left-0 h-full">
        <img className="w-full h-full" src={image} alt="global" />
      </div>
      <div className="w-full position-r index-1 h-550 column-c align-i-c">
        <h5 className="color-grey font-f-secondary letter-s-xs p-1">
          JOIN THE RETURN TO MORIA DISCORD
        </h5>
        <AnimatedHeader
          className="font-f-primary mr-2 responsive-h"
          text="Unite with Your"
        />
        <AnimatedHeader
          className="font-f-primary mr-2 responsive-h"
          text="Fellow Dwarves"
        />
        <motion.h5
          variants={imageOpacity}
          initial="hidden"
          whileInView="visible"
          className="color-grey mt-2 font-f-secondary line-h-30 w-full mw-400 text-a-c"
        >
          Adventure awaits in our growing Discord community. Join to discover
          all things Return to Moria.
        </motion.h5>
        <div className="position-r p-2 mt-6 primary-button">
          <BorderSvg />
          <FaDiscord className="mr-2 font-s-md" />
          join now
        </div>
      </div>
      <div className="w-full p-2 row-sb index-1">
        <div className="h-50 m-2 w-auto">
          <img src={logo} className="h-50 w-auto" alt="moria" />
        </div>
        <div>
          <img className="mr-5" src={north} alt="north" />
          <img className="mr-5" src={freeRange} alt="freeRange" />
          <img className="mr-5" src={me} alt="me" />
        </div>
      </div>
    </section>
  );
}

export default SectionFive;
