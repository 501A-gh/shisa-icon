import { SVGProps } from "react";
import Shisa from "../shisa";

const PlusSquare: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="1" y="1" width="22" height="22" rx="5" />
    <path d="M6 11.9199H18" />
    <path d="M12 5.91992V17.9199" />
  </Shisa>
);

export default PlusSquare;
