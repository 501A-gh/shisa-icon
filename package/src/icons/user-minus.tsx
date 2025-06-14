import { SVGProps } from "react";
import Shisa from "../shisa";

const UserMinus: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M9.00002 13C4.88121 13 3.18591 15.7697 2.48812 18.0497C2.00325 19.6341 3.34315 21 5 21H13C14.6569 21 15.9968 19.6341 15.5119 18.0498C14.8141 15.7697 13.1188 13 9.00002 13Z" />
    <path d="M16 12H22" />
    <circle cx="9" cy="7" r="3" />
  </Shisa>
);

export default UserMinus;
