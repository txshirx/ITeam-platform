import * as React from "react";

const MinusIcon: React.FC<React.SVGProps<SVGElement>> = ({ width=20, height=20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="var(--main-yeahub)"
      d="M17.5 10a.624.624 0 0 1-.625.625H3.125a.625.625 0 1 1 0-1.25h13.75A.625.625 0 0 1 17.5 10"
    ></path>
  </svg>
);

export default MinusIcon;
