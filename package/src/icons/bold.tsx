import { SVGProps } from "react";
import Shisa from "../shisa";

const Bold: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M7 12H11C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4H8C7.44772 4 7 4.44772 7 5V12ZM7 12H13C15.2091 12 17 13.7909 17 16C17 18.2091 15.2091 20 13 20H8C7.44772 20 7 19.5523 7 19V12Z" />
  </Shisa>
);

export default Bold;
