import React from "react";

interface IconProps {
  color?: string;
  size?: number;
}

const BigDataSVG: React.FC<IconProps> = ({ color = "#b5d1ed", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 105.07 122.88"
    width={size}
    height={size}
    role="img"
    aria-labelledby="TechTitle"
    style={{ enableBackground: "new 0 0 105.07 122.88" }}
  >
    <path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M52.53,0c28.87,0,52.27,10.96,52.27,24.46c0,13.51-23.41,24.46-52.27,24.46c-28.86,0-52.27-10.96-52.27-24.46 C0.26,10.96,23.67,0,52.53,0L52.53,0z M0.26,81.83v18.78c9.3,33.03,101.18,26.65,104.55-1.69V80.16 C100.22,111.27,7.61,113.51,0.26,81.83L0.26,81.83L0.26,81.83z M0,32.94v18.34c9.3,32.26,101.69,27.9,105.07,0.23V33.18 C100.47,63.57,7.35,63.88,0,32.94L0,32.94z M0,56.64v18.78c9.3,33.03,101.69,28.57,105.07,0.23V56.89C100.47,88,7.35,88.32,0,56.64 L0,56.64z"
    />
  </svg>
);

export default BigDataSVG;
