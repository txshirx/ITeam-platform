import * as React from "react";

const LeftArrow: React.FC<React.SVGProps<SVGElement>> = ({ width=28, height=28, stroke="var(--main-yeahub)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 28 28"
  >
    <rect width="27" height="27" x="0.5" y="0.5" fill="var(--background-color-secondary)" rx="13.5"></rect>
    <rect
      width="27"
      height="27"
      x="0.5"
      y="0.5"
      stroke={stroke}
      rx="13.5"
    ></rect>
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.5 19-5-5 5-5"
    ></path>
  </svg>
);

export default LeftArrow;
