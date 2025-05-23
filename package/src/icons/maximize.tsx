import { SVGProps } from "react";
import Shisa from "../shisa";

const Maximize: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M20 4L14 10" />
    <path d="M16 3H20C20.5523 3 21 3.44772 21 4V8" />
    <path d="M3 16V20C3 20.5523 3.44772 21 4 21H8" />
    <path d="M10 14L4 20" />
  </Shisa>
);

export default Maximize;
