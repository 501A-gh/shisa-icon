import { SVGProps } from "react";
import Shisa from "../shisa";

const Light: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 0.999688V4" />
    <path d="M12 20V23" />
    <path d="M20 12H23" />
    <path d="M1 12H4" />
    <path d="M18.3639 18.3643L19.7781 19.7785" />
    <path d="M4.2218 4.22217L5.63602 5.63638" />
    <path d="M18.3639 5.63623L19.7781 4.22202" />
    <path d="M4.2218 19.7783L5.63602 18.3641" />
    <circle cx="12" cy="12" r="5" />
  </Shisa>
);

export default Light;
