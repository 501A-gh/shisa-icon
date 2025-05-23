import { SVGProps } from "react";
import Shisa from "../shisa";

const MoreVertical: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <circle cx="12" cy="5" r="2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="19" r="2" fill="currentColor" stroke="none" />
  </Shisa>
);

export default MoreVertical;
