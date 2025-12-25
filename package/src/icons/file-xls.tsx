import { SVGProps } from "react";
import Shisa from "../shisa";

const ShisaFileXls: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M3 8L7 16M7 8L3 16M10 8V16H14M17 16H21V12H17V8H21" />
  </Shisa>
);

export default ShisaFileXls;
