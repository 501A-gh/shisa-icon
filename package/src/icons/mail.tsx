import { SVGProps } from "react";
import Shisa from "../shisa";

const Mail: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M2 7L10.1259 13.5007C11.2216 14.3773 12.7784 14.3773 13.8741 13.5007L22 7" />
  </Shisa>
);

export default Mail;
