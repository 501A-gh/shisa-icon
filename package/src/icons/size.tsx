import { SVGProps } from "react";
import Shisa from "../shisa";

const Size: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="2" y="8" width="14" height="14" rx="1" />
    <path d="M19 22H20.5M22 22H20.5M19 8H20.5M22 8H20.5M20.5 8V22M2 5L2 3.5M2 2L2 3.5M16 5V3.5M16 2V3.5M16 3.5H2" />
  </Shisa>
);

export default Size;
