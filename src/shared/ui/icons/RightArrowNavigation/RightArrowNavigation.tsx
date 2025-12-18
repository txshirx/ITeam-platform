import * as React from "react";

const RightArrowNavigation: React.FC<React.SVGProps<SVGElement>> = ({ width=20, height=20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 21"
  >
    <path
      fill="var(--main-yeahub)"
      d="m14.193 10.943-6.25 6.25a.625.625 0 1 1-.885-.885l5.809-5.808-5.809-5.807a.625.625 0 1 1 .885-.885l6.25 6.25a.625.625 0 0 1 0 .885"
    ></path>
  </svg>
);

export default RightArrowNavigation;
