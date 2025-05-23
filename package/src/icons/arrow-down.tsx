import { SVGProps } from "react";
import Shisa from "../shisa";

const ArrowDown: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M19 12L12.7526 19.1399C12.3542 19.5952 11.6458 19.5952 11.2474 19.1399L5 12" />
    <path d="M12 19V4" />
  </Shisa>
);

export default ArrowDown;
