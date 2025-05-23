import { SVGProps } from "react";
import Shisa from "../shisa";

const ChevronDown: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M5 9L10.6984 13.8844C11.4474 14.5263 12.5526 14.5263 13.3016 13.8844L19 9" />
  </Shisa>
);

export default ChevronDown;
