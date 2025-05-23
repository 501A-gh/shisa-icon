import { SVGProps } from "react";
import Shisa from "../shisa";

const MinusSquare: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="1" y="1" width="22" height="22" rx="5" />
    <path d="M6 11.9199H18" />
  </Shisa>
);

export default MinusSquare;
