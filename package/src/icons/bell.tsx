import { SVGProps } from "react";
import Shisa from "../shisa";

const Bell: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19M5 8C5 8 6 2 12 2C18 2 19 8 19 8C19 8 19.5 11 19.5 13C19.5 15 21.5 15 21.5 16.5C21.5 18 20 18 20 18H4C4 18 2.5 18 2.5 16.5C2.5 15 4.5 15 4.5 13C4.5 11 5 8 5 8Z" />
  </Shisa>
);

export default Bell;
