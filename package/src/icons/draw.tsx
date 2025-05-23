import { SVGProps } from "react";
import Shisa from "../shisa";

const Draw: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M14 2L7 11.5" />
    <path d="M22 19.0003C22 19.0003 18.9285 14.5494 16 14.5003C12.4107 14.4401 11.5385 17.962 9 20.5003C6.5 23 2.5 19.5003 2.5 19.5003" />
    <circle cx="4" cy="15" r="2" fill="currentColor" stroke="none" />
  </Shisa>
);

export default Draw;
