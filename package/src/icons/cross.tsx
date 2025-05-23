import { SVGProps } from "react";
import Shisa from "../shisa";

const Cross: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M18 6L6 18" />
    <path d="M18 18L6 6" />
  </Shisa>
);

export default Cross;
