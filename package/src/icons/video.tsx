import { SVGProps } from "react";
import Shisa from "../shisa";

const Video: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="1" y="1" width="22" height="22" rx="5" />
    <path d="M8 17L16 12" />
    <path d="M8 7L16 12" />
    <path d="M8 7V17" />
  </Shisa>
);

export default Video;
