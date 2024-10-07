import React from "react";

interface IconProps {
  color?: string; // Optional, if you want to set a color later
}

const VueJsSVG: React.FC<IconProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={44} // Fixed size
    height={44} // Fixed size
    role="img"
    aria-labelledby="VueJsTitle"
  >
    <title id="VueJsTitle">Vue.js</title>
    <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
    </svg>
);

export default VueJsSVG;