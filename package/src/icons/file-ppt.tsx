import { SVGProps } from "react";
import Shisa from "../shisa";

const ShisaFilePpt: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M3 16V13M3 13V9C3 8.44772 3.44772 8 4 8H6C6.55228 8 7 8.44772 7 9V12C7 12.5523 6.55228 13 6 13H5.28571H3Z" />
    <path d="M10 16V13M10 13V9C10 8.44772 10.4477 8 11 8H13C13.5523 8 14 8.44772 14 9V12C14 12.5523 13.5523 13 13 13H10Z" />
    <path d="M17 8H19M21 8H19M19 8V16" />
  </Shisa>
);

export default ShisaFilePpt;
