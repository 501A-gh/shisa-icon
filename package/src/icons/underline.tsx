import { SVGProps } from "react";
import Shisa from "../shisa";

const Underline: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M7 4V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V4" />
    <path d="M5 20H19" />
  </Shisa>
);

export default Underline;
