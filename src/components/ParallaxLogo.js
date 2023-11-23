import React, { useState } from "react";
import logo from "../assets/logo.webp";

function ParallaxLogo() {
  const [scaleLogo, setScaleLogo] = useState(true);

  const scaleOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 0) {
      setScaleLogo(false);
    } else {
      setScaleLogo(true);
    }
  };

  window.addEventListener("scroll", scaleOnScroll);

  return (
    <div
      className={
        scaleLogo
          ? "w-full mw-700 position-s top-0 index-4 column-c align-i-c"
          : "w-full mw-700 position-s top-n30 index-4 column-c align-i-c time-lg transform-scale-sm ease-e"
      }
    >
      <img className="w-700 h-auto" src={logo} alt="" />
    </div>
  );
}

export default ParallaxLogo;
