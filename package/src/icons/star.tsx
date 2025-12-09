import { SVGProps } from "react";
import Shisa from "../shisa";

const Star: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 3L15.5 8.5L21.5 10L17.5 15L18 21L12 18.5L6 21L6.49999 15L2.5 10L8.49999 8.5L12 3Z" />
  </Shisa>
);

export default Star;
