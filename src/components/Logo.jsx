import React from "react";

const Logo = ({ width = 60 }) => (
  <svg
    viewBox="0 0 100 100"
    width={width}
    height={width}
    xmlns="http://www.w3.org/2000/svg"
    className="flex items-center justify-center"
  >
    {/* Hexagon */}
    <polygon
      points="50,10 90,30 90,70 50,90 10,70 10,30"
      fill="transparent" // Transparent fill for the hexagon
      stroke="#1E3A8A" // Tailwind CSS blue-950 color
      strokeWidth="5"
    />
    {/* Letter R */}
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="40"
      fill="white" // Tailwind CSS blue-950 color
      fontWeight="bold"
      className="font-titan"
    >
      R
    </text>
  </svg>
);

export default Logo;
