import { SVGProps } from "react";
import Shisa from "../shisa";

const Collapse: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M5 3L10.6984 7.88436C11.4474 8.52634 12.5526 8.52634 13.3016 7.88436L19 3" />
    <path d="M5 21L10.6984 16.1156C11.4474 15.4737 12.5526 15.4737 13.3016 16.1156L19 21" />
  </Shisa>
);

export default Collapse;
