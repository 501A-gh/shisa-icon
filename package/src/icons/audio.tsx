import { SVGProps } from "react";
import Shisa from "../shisa";

const Audio: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M10 5L10 19" />
    <path d="M14 7.5V16.5" />
    <path d="M18 10V14" />
    <path d="M6 10V14" />
  </Shisa>
);

export default Audio;
