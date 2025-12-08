import * as React from "react";

const PlusIcon: React.FC<React.SVGProps<SVGElement>> = ({ width=20, height=20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="var(--main-yeahub)"
      d="M10 2.5a.626.626 0 0 1 .625.625v6.25h6.25a.626.626 0 1 1 0 1.25h-6.25v6.25a.626.626 0 1 1-1.25 0v-6.25h-6.25a.626.626 0 1 1 0-1.25h6.25v-6.25A.626.626 0 0 1 10 2.5"
    ></path>
    <path
      stroke="var(--main-yeahub)"
      d="M10 2.5a.626.626 0 0 1 .625.625v6.25h6.25a.626.626 0 1 1 0 1.25h-6.25v6.25a.626.626 0 1 1-1.25 0v-6.25h-6.25a.626.626 0 1 1 0-1.25h6.25v-6.25A.626.626 0 0 1 10 2.5Z"
    ></path>
  </svg>
);

export default PlusIcon;
