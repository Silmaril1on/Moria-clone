import React from "react";

function ScrollSvg() {
  return (
    <div className="m-2 column-c">
      <div className="scroll-line column-c"></div>
      <svg width={16} height={9} viewBox="0 0 16 9" fill="none">
        <path
          d="m15 8L8 0.999999L0.999999 8"
          stroke="#E0EEF1"
          strokeOpacity={0.5}
          strokeLinecap="bevel"
        />
      </svg>
    </div>
  );
}

export default ScrollSvg;
