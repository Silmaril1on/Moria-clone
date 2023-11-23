import React from "react";
import video from "../../assets/trailer.mp4";
import AnimatedHeader from "../../components/AnimatedHeader";
import dwarf from "../../assets/video-image.webp";
import { motion } from "framer-motion";
import { staggerOpacity } from "../../framerMotion/motionValues";

function SectionTwo() {
  return (
    <main className="mt-6 mb-6 column-c align-i-c p-2">
      <video
        className="w-8 mb-6 h-full"
        controls
        autoPlay={true}
        muted
        loop={true}
      >
        <source src={video} type="video/mp4" />
      </video>
      <section className="row-c mt-6 mw-8 w-full">
        <div className="color-white column-c align-i-c p-4 w-full mw-6">
          <AnimatedHeader
            className="font-f-primary mr-2 responsive-h"
            text="Explore a World of"
          />
          <AnimatedHeader
            className="font-f-primary mr-2 responsive-h"
            text="Endless Possibilities"
          />
          <motion.p
            variants={staggerOpacity}
            initial="hidden"
            whileInView="visible"
            className="responsive-p primary-p pt-3"
          >
            Return to Moria utilizes procedurally generated realms, meaning no
            two adventures will be alike. Every expedition is traversable either
            solo or online with companions. Players can mine to craft greater
            gear and resources, but beware mining makes noise, and noise created
            in the quiet deep threatens to awaken the dangers below: where
            there's clatter, there's combat. Excavate the mysteries of three
            legendary mountains, extract precious metals, scrape to survive, and
            battle unspeakable forces to learn the secret of the Shadow that
            lurks within.
          </motion.p>
        </div>
        <div className="w-full h-full">
          <img className="w-full h-600" src={dwarf} alt="dwarf" />
        </div>
      </section>
    </main>
  );
}

export default SectionTwo;
