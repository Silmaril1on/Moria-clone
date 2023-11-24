import React from "react";
import SideMenu from "./SideMenu";
import BorderSvg from "../../components/BorderSvg";
import "./navigation.scss";
import logo from "../../assets/logo.webp";
import { staggerOpacity } from "../../framerMotion/motionValues";
import { motion } from "framer-motion";

function Navigation() {
  return (
    <nav className="bg-black nav-bar pr-1 pl-1 mt-4 w-full h-70 position-s index-4 top-0  row-sb align-i-c">
      <SideMenu />
      <motion.div
        variants={staggerOpacity}
        initial="hidden"
        animate="visible"
        className="mobile-size w-150 ml-4 h-auto"
      >
        <img className="w-full h-full" src={logo} alt="moria" />
      </motion.div>
      <button className="primary-button p-2 responsive-p">
        <BorderSvg />
        buy know
      </button>
    </nav>
  );
}

export default Navigation;
