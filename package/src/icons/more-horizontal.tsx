import { SVGProps } from "react";
import Shisa from "../shisa";

const MoreHorizontal: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <circle cx="5" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="19" cy="12" r="2" fill="currentColor" stroke="none" />
  </Shisa>
);

export default MoreHorizontal;
