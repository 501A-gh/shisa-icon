import { SVGProps } from "react";
import Shisa from "../shisa";

const DoubleCircle: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <circle cx="12" cy="12" r="11" />
    <circle cx="12" cy="12" r="5" />
  </Shisa>
);

export default DoubleCircle;
