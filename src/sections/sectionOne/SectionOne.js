import React from "react";
import about from "../../assets/about-bg.webp";
import LineSvg from "../../components/LineSvg";
import SideSvg from "../../components/SideSvg";
import BorderSvg from "../../components/BorderSvg";
import AnimatedHeader from "../../components/AnimatedHeader";
import { staggerOpacity } from "../../framerMotion/motionValues";
import { motion } from "framer-motion";
const epic =
  "https://assets-global.website-files.com/65142042657ddc9d3dfc468e/651d7e719dbbab56a2b83bef_Epic_Games.svg";

function SectionOne() {
  return (
    <section className="position-r column-c mt-6 mb-6 h-full w-full ">
      <img
        className="position-a top-0 left-0 w-full h-full"
        src={about}
        alt="about"
      />
      <div className="primary-shade"></div>
      gradientUnits="userSpaceOnUse"
      <article className="color-white position-r top-0 left-0 index-1 w-auto h-full column-c align-i-c font-f-primary p-6">
        <LineSvg />
        <div className="overflow-h mt-4 mb-4">
          <AnimatedHeader
            className="font-f-primary responsive-h mr-2 font-w-500"
            text="Reclaim the Dwarven"
          />
          <AnimatedHeader
            className="font-f-primary responsive-h mr-2 font-w-500"
            text="Homeland of Moria"
          />
        </div>
        <motion.p
          variants={staggerOpacity}
          initial="hidden"
          whileInView="visible"
          className="color-grey responsive-p font-f-secondary mw-800 line-h-30 text-a-c"
        >
          Welcome to The Lord of the Rings: Return to Moria™, the only survival
          crafting video game set in the Fourth Age of Middle-earth™, the iconic
          fantasy world created by J.R.R. Tolkien. Summoned to the Misty
          Mountains by Lord Gimli Lockbearer, players take control of a company
          of Dwarves tasked to reclaim the lost spoils from the Dwarven homeland
          of Moria—known as Khazad-dûm or Dwarrowdelf—in the depths below their
          very feet. Their quest will require fortitude, delving deep into the
          Mines of Moria to recover its treasures.
        </motion.p>
        <div className="mt-4 mb-6 transform-rotate-full">
          <LineSvg />
        </div>
        <div className="mt-6">
          <div className="row-sa p-1 align-i-c">
            <div className="transform-rotate-full">
              <SideSvg />
            </div>
            <AnimatedHeader
              className="font-f-primary text-t-cap mr-1"
              text="available now"
            />
            <SideSvg />
          </div>
        </div>
        <div className="primary-button pl-6 pr-6 pt-4 pb-4 mt-6">
          <BorderSvg />
          <img className="" src={epic} alt="epic-games" />
        </div>
      </article>
    </section>
  );
}

export default SectionOne;
