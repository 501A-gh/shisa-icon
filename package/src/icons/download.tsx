import { SVGProps } from "react";
import Shisa from "../shisa";

const Download: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M17 12L12.7071 16.2929C12.3166 16.6834 11.6834 16.6834 11.2929 16.2929L7 12" />
    <path d="M12 16V3" />
    <path d="M3 16V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V16" />
  </Shisa>
);

export default Download;
