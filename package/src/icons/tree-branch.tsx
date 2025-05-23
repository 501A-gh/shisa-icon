import { SVGProps } from "react";
import Shisa from "../shisa";

const TreeBranch: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M10 3V11C10 12.6569 11.3431 14 13 14H21" />
  </Shisa>
);

export default TreeBranch;
