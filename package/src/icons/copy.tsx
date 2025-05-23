import { SVGProps } from "react";
import Shisa from "../shisa";

const Copy: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="3" y="7" width="14" height="14" rx="2" />
    <path d="M9 3H17C19.2091 3 21 4.79086 21 7V15" />
  </Shisa>
);

export default Copy;
