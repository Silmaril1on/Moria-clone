import React from "react";
import ParallaxShape from "./ParallaxShape";
import ParallaxBack from "./ParallaxBack";
import ParallaxMiddle from "./ParallaxMiddle";
import ParallaxLeft from "./ParallaxLeft";
import ParallaxRight from "./ParallaxRight";

function Parallax() {
  return (
    <div className="h-auto mb-6 column-c w-full">
      <div className="h-auto w-full position-r">
        <ParallaxShape />
        <ParallaxBack />
        <ParallaxMiddle />
        <ParallaxLeft />
        <ParallaxRight />
        <div className="primary-shade"></div>
      </div>
    </div>
  );
}

export default Parallax;
