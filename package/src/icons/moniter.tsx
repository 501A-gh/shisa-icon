import { SVGProps } from "react";
import Shisa from "../shisa";

const Moniter: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 18V22" />
    <path d="M7 22H17" />
    <rect x="2" y="2" width="20" height="15" rx="3" />
  </Shisa>
);

export default Moniter;
