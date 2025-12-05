import { SVGProps } from "react";
import Shisa from "../shisa";

const Italic: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M9 4H13.5M18 4H13.5M6 20H10.5M15 20H10.5M13.5 4L10.5 20" />
  </Shisa>
);

export default Italic;
