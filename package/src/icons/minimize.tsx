import { SVGProps } from "react";
import Shisa from "../shisa";

const Minimize: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M21 3L15 9" />
    <path d="M5 14H9C9.55228 14 10 14.4477 10 15V19" />
    <path d="M14 5V9C14 9.55228 14.4477 10 15 10H19" />
    <path d="M9 15L3 21" />
  </Shisa>
);

export default Minimize;
