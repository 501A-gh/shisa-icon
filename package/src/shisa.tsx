import React, { SVGProps } from "react";

const Shisa: React.FC<SVGProps<SVGSVGElement>> = ({
  children,
  ref,
  ...props
}) => (
  <svg
    fill="none"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    ref={ref}
    {...props}
  >
    {children}
  </svg>
);

export default Shisa;
