import { SVGProps } from "react";
import Shisa from "../shisa";

const Pause: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M9.78571 6H6.5C6.22386 6 6 6.22386 6 6.5V17.5C6 17.7761 6.22386 18 6.5 18H9.78571C10.0619 18 10.2857 17.7761 10.2857 17.5V6.5C10.2857 6.22386 10.0619 6 9.78571 6Z" />
    <path d="M17.5 6H14.5C14.2239 6 14 6.22386 14 6.5V17.5C14 17.7761 14.2239 18 14.5 18H17.5C17.7761 18 18 17.7761 18 17.5V6.5C18 6.22386 17.7761 6 17.5 6Z" />
  </Shisa>
);

export default Pause;
