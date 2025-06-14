import { SVGProps } from "react";
import Shisa from "../shisa";

const Users: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M9 13C4.64856 13 2.664 15.6627 1.7589 18.0915C0.987479 20.1616 2.79086 22 5 22H13C15.2091 22 17.0125 20.1616 16.2411 18.0915C15.336 15.6627 13.3514 13 9 13Z" />
    <path d="M13 22H20C21.6569 22 23.0115 20.6342 22.5501 19.0429C21.996 17.1321 20.7594 15 18 15C16.8947 15 16 15.5 16 15.5" />
    <circle cx="9" cy="7" r="3" />
    <circle cx="18" cy="10" r="2" />
  </Shisa>
);

export default Users;
