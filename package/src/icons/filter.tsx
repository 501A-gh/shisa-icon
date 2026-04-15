import { SVGProps } from "react";
import Shisa from "../shisa";

const Filter: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M2 7L12 7" />
    <path d="M12 17H22" />
    <path d="M18 7H22" />
    <path d="M2 17H6" />
    <circle cx="15" cy="7" r="3" />
    <circle cx="9" cy="17" r="3" />
  </Shisa>
);

export default Filter;
