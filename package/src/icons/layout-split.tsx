import { SVGProps } from "react";
import Shisa from "../shisa";

const LayoutSplit: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 4V20M3.2 21H20.8C22.015 21 23 20.1046 23 19V5C23 3.89543 22.015 3 20.8 3H3.2C1.98497 3 1 3.89543 1 5V19C1 20.1046 1.98497 21 3.2 21Z" />
  </Shisa>
);

export default LayoutSplit;
