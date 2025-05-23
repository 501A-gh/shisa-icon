import { SVGProps } from "react";
import Shisa from "../shisa";

const Plus: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M6 11.9199H18" />
    <path d="M12 6V18" />
  </Shisa>
);

export default Plus;
