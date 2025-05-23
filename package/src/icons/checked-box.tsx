import { SVGProps } from "react";
import Shisa from "../shisa";

const CheckedBox: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="1" y="1" width="22" height="22" rx="5" />
    <path d="M5.69995 12.3C5.69995 12.3 8.27522 19.8832 12 17.4C13.8 16.2 18 6 18 6" />
  </Shisa>
);

export default CheckedBox;
