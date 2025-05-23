import { SVGProps } from "react";
import Shisa from "../shisa";

const ArrowUp: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M19 12L12.7526 4.86009C12.3542 4.40476 11.6458 4.40476 11.2474 4.86009L5 12" />
    <path d="M12 20V5" />
  </Shisa>
);

export default ArrowUp;
