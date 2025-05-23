import { SVGProps } from "react";
import Shisa from "../shisa";

const Timer: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 12V6" />
    <circle cx="12" cy="12" r="11" />
  </Shisa>
);

export default Timer;
