import React from "react";

function BorderSvg() {
  return (
    <svg width="100%" height="100%" className="position-a top-0 left-0">
      <rect
        stroke="url(#gradient)"
        fill="none"
        width="100%"
        height="100%"
        strokeWidth={1.5}
        rx="0"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(224,238,241, 0.25)" />
          <stop offset="50.1%" stopColor="rgba(224,238,241, 0.90)" />
          <stop offset="100%" stopColor="rgba(224,238,241, 0.25)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default BorderSvg;
