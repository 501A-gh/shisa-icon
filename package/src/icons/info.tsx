import { SVGProps } from "react";
import Shisa from "../shisa";

const Info: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="1" y="1" width="22" height="22" rx="11" />
    <path d="M12 18L12 12" />
    <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none" />
  </Shisa>
);

export default Info;
