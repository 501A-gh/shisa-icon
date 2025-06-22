import { SVGProps } from "react";
import Shisa from "../shisa";

const PaddingHorizontal: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="7" y="7" width="10" height="10" rx="1" />
    <path d="M3 21V12M3 3V12M1 12H3M21 21V12M21 3V12M23 12H21" />
  </Shisa>
);

export default PaddingHorizontal;
