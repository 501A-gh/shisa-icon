import { SVGProps } from "react";
import Shisa from "../shisa";

const User: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 13C7.08997 13 4.85865 15.6787 3.84465 18.1133C2.99528 20.1527 4.79086 22 7 22H17C19.2091 22 21.0047 20.1527 20.1554 18.1133C19.1413 15.6787 16.91 13 12 13Z" />
    <circle cx="12" cy="6" r="4" />
  </Shisa>
);

export default User;
