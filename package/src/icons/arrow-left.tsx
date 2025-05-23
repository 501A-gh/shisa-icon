import { SVGProps } from "react";
import Shisa from "../shisa";

const ArrowLeft: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M20 12H5" />
    <path d="M12 5L4.86009 11.2474C4.40476 11.6458 4.40476 12.3542 4.86009 12.7526L12 19" />
  </Shisa>
);

export default ArrowLeft;
