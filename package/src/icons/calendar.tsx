import { SVGProps } from "react";
import Shisa from "../shisa";

const ShisaCalendar: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa strokeLinecap="round" {...props}>
    <path d="M7 2V6" />
    <path d="M17 2V6" />
    <rect x="1" y="4" width="22" height="18" rx="3" />
    <path d="M1 9H23" />
  </Shisa>
);

export default ShisaCalendar;
