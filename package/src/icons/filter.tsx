import { SVGProps } from "react";
import Shisa from "../shisa";

const Filter: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M11 5L22 5" />
    <path d="M11 19H22" />
    <path d="M2 12H9" />
    <path d="M21 12H22" />
    <circle cx="5" cy="5" r="3" />
    <circle cx="15" cy="12" r="3" />
    <circle cx="5" cy="19" r="3" />
  </Shisa>
);

export default Filter;
