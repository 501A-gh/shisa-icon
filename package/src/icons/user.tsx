import { SVGProps } from "react";
import Shisa from "../shisa";

const User: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M3 22.5C3 22.5 3 13 12 13C21 13 21 22.5 21 22.5" />
    <circle cx="12" cy="6" r="4" />
  </Shisa>
);

export default User;
