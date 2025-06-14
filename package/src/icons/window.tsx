import { SVGProps } from "react";
import Shisa from "../shisa";

const Window: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M22 9H2M3.2 21H20.8C22.015 21 23 20.1046 23 19V5C23 3.89543 22.015 3 20.8 3H3.2C1.98497 3 1 3.89543 1 5V19C1 20.1046 1.98497 21 3.2 21Z" />
    <circle cx="4" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="7" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="10" cy="6" r="1" fill="currentColor" stroke="none" />
  </Shisa>
);

export default Window;
