import { SVGProps } from "react";
import Shisa from "../shisa";

const PaddingVertical: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="7" y="7" width="10" height="10" rx="1" />
    <path d="M21 3H12M3 3H12M12 1V3M21 21H12M3 21H12M12 23V21" />
  </Shisa>
);

export default PaddingVertical;
