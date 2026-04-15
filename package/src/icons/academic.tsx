import { SVGProps } from "react";
import Shisa from "../shisa";

const Academic: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 4L1 10L12 16L23 10L12 4Z" strokeLinejoin="round" />
    <path d="M5 12V18C5 18 7.15385 21 12 21C16.8462 21 19 18 19 18V12" strokeLinejoin="round" />
    <path d="M23 10V16" strokeLinecap="round" strokeLinejoin="round" />
  </Shisa>
);

export default Academic;
