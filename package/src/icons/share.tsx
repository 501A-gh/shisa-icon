import { SVGProps } from "react";
import Shisa from "../shisa";

const Share: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M17 7L12.7071 2.70711C12.3166 2.31658 11.6834 2.31658 11.2929 2.70711L7 7" />
    <path d="M12 15V3" />
    <path d="M7 12H6C4.89543 12 4 12.8954 4 14V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V14C20 12.8954 19.1046 12 18 12H17" />
  </Shisa>
);

export default Share;
