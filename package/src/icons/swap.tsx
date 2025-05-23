import { SVGProps } from "react";
import Shisa from "../shisa";

const Swap: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M4 6L16 6C18.2091 6 20 7.79086 20 10V12" />
    <path d="M20 18L8 18C5.79086 18 4 16.2091 4 14V12" />
    <path d="M7 3L4.06667 5.2C3.53333 5.6 3.53333 6.4 4.06667 6.8L7 9" />
    <path d="M17 21L19.9333 18.8C20.4667 18.4 20.4667 17.6 19.9333 17.2L17 15" />
  </Shisa>
);

export default Swap;
