import { SVGProps } from "react";
import Shisa from "../shisa";

const ArrowRight: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M19 12H4" />
    <path d="M12 5L19.1399 11.2474C19.5952 11.6458 19.5952 12.3542 19.1399 12.7526L12 19" />
  </Shisa>
);

export default ArrowRight;
