import { SVGProps } from "react";
import Shisa from "../shisa";

const Building: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M8 21V4C8 2.89543 8.89543 2 10 2H19C20.1046 2 21 2.89543 21 4V21C21 21.5523 20.5523 22 20 22H9C8.44772 22 8 21.5523 8 21Z" />
    <path d="M11 22H4C3.44772 22 3 21.5523 3 21V12C3 10.8954 3.89543 10 5 10H7.57143" />
    <path d="M12 22V16C12 15.4477 12.4477 15 13 15H16C16.5523 15 17 15.4477 17 16V22" />
  </Shisa>
);

export default Building;
