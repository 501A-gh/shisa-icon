import { SVGProps } from "react";
import Shisa from "../shisa";

const Lock: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M6 10H18C19.1046 10 20 10.8954 20 12V18C20 20.7614 17.7614 23 15 23H9C6.23858 23 4 20.7614 4 18V12C4 10.8954 4.89543 10 6 10Z" />
    <path d="M8.00025 9.875C8.00025 9.875 6.23337 5.08384 8.00026 2.87497C10 0.375 14 0.375029 16 2.87486C17.767 5.08346 16 9.87502 16 9.87502" />
    <path d="M12 14.875V17.875" />
  </Shisa>
);

export default Lock;
