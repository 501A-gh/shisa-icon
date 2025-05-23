import { SVGProps } from "react";
import Shisa from "../shisa";

const Smartphone: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M10 20H14" />
    <rect x="4" y="1" width="16" height="22" rx="3" />
  </Shisa>
);

export default Smartphone;
