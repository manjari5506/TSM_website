import React from "react";

interface IconProps {
  color?: string; // Optional color prop, but not used as per your request
  size?: number; // Optional size prop, but fixed size will be set in the SVG
}

const Framer: React.FC<IconProps> = ({
  color = "#0055FF", // Default color if needed, but won't be used
  size = 44, // Fixed size
}) => (
  <svg
    fill={color} // Fill color for compatibility, can be omitted if not needed
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    aria-labelledby="FramerTitle"
  >
    <title id="FramerTitle">Framer</title>
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
);

export default Framer;