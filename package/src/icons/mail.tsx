import { SVGProps } from "react";
import Shisa from "../shisa";

const Mail: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M2 7L10.2796 12.7957C11.3126 13.5188 12.6874 13.5188 13.7204 12.7957L22 7" />
  </Shisa>
);

export default Mail;
