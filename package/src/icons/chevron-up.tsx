import { SVGProps } from "react";
import Shisa from "../shisa";

const ChevronUp: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M5 15L10.6984 10.1156C11.4474 9.47366 12.5526 9.47366 13.3016 10.1156L19 15" />
  </Shisa>
);

export default ChevronUp;
