import { SVGProps } from "react";
import Shisa from "../shisa";

const Eye: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M1 12.0801C1 12.0801 4 5 12 5C20 5 23 12.0801 23 12.0801" />
    <path d="M2.5 10C2.5 10 5 18 12 18C19 18 21.5 10 21.5 10" />
    <circle cx="12" cy="11" r="4" />
  </Shisa>
);

export default Eye;
