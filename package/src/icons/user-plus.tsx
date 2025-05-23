import { SVGProps } from "react";
import Shisa from "../shisa";

const UserPlus: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M1.5 19.5C1.5 19.5 1.5 12 8.00003 12C14.5001 12 15 22.5 15 22.5" />
    <path d="M16 12H22" />
    <path d="M19 9V15" />
    <circle cx="8" cy="5" r="4" />
  </Shisa>
);

export default UserPlus;
