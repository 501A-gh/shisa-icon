import { SVGProps } from "react";
import Shisa from "../shisa";

const External: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M10 6H6C4.34315 6 3 7.34315 3 9V18C3 19.6569 4.34315 21 6 21H10.5H15C16.6569 21 18 19.6569 18 18L18 14" />
    <path d="M10 14L20 4" />
    <path d="M13 3H20.5C20.7761 3 21 3.22386 21 3.5V11" />
  </Shisa>
);

export default External;
