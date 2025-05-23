import { SVGProps } from "react";
import Shisa from "../shisa";

const Users: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M1.5 19.5C1.5 19.5 1.5 12 8.00003 12C14.5001 12 15 22.5 15 22.5" />
    <path d="M16.5 15.0005C17.5 14.5001 22 13.5 22.5 19.5005" />
    <circle cx="8" cy="5" r="4" />
    <circle cx="18" cy="8" r="3" />
  </Shisa>
);

export default Users;
