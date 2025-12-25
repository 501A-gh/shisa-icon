import { SVGProps } from "react";
import Shisa from "../shisa";

const ShisaFilePdf: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M3 16V13M3 13V9C3 8.44772 3.44772 8 4 8H6C6.55228 8 7 8.44772 7 9V12C7 12.5523 6.55228 13 6 13H3Z" />
    <path d="M14 12C14 7.53536 12.8571 8.01502 10 8.01502V12L10 15.985C12.8571 15.985 14 16.4647 14 12Z" />
    <path d="M17 16V12M21 8H17V12M17 12H21" />
  </Shisa>
);

export default ShisaFilePdf;
