import { SVGProps } from "react";
import Shisa from "../shisa";

const Undo: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M15 19H16C18.2091 19 20 17.2091 20 15V13C20 10.7909 18.2091 9 16 9L4 9" />
    <path d="M8 5L3.97609 8.21913C3.47568 8.61946 3.47568 9.38054 3.97609 9.78087L8 13" />
  </Shisa>
);

export default Undo;
