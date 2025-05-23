import { SVGProps } from "react";
import Shisa from "../shisa";

const Check: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M6 12.3C6 12.3 8.57527 19.8832 12.3 17.4C14.1 16.2 18.3 6 18.3 6" />
  </Shisa>
);

export default Check;
