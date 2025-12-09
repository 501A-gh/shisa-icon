import { SVGProps } from "react";
import Shisa from "../shisa";

const Circle: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <circle cx="12" cy="12" r="9" />
  </Shisa>
);

export default Circle;
