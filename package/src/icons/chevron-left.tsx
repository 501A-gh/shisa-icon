import { SVGProps } from "react";
import Shisa from "../shisa";

const ChevronLeft: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M15 5L10.1156 10.6984C9.47366 11.4474 9.47366 12.5526 10.1156 13.3016L15 19" />
  </Shisa>
);

export default ChevronLeft;
