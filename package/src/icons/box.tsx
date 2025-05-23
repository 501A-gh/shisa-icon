import { SVGProps } from "react";
import Shisa from "../shisa";

const Box: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="1" y="1" width="22" height="22" rx="5" />
  </Shisa>
);

export default Box;
