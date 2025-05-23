import { SVGProps } from "react";
import Shisa from "../shisa";

const ChevronRight: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M9 5L13.8844 10.6984C14.5263 11.4474 14.5263 12.5526 13.8844 13.3016L9 19" />
  </Shisa>
);

export default ChevronRight;
