import React, { useState } from "react";
import ScrollSvg from "../../components/ScrollSvg";

function ScrollNumbers() {
  const [numbers, setNumbers] = useState(0);

  const changeOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 3200) {
      setNumbers(numbers + 1);
    }
  };

  window.addEventListener("scroll", changeOnScroll);

  return (
    <div className="column-c align-i-c h-600 position-s top-120 scroll-numbers left-0 w-200">
      <ScrollSvg />
      <span className="font-f-primary">{numbers}</span>
      <h6 className="color-grey font-f-secondary text-a-c mt-2 mb-2 font-w-400">
        Fathoms Deep
      </h6>
      <div className="transform-rotate-full">
        <ScrollSvg />
      </div>
    </div>
  );
}

export default ScrollNumbers;
