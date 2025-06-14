import { SVGProps } from "react";
import Shisa from "../shisa";

const Clock: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 6V11.5858C12 11.851 12.1054 12.1054 12.2929 12.2929L16 16" />
    <circle cx="12" cy="12" r="11" />
  </Shisa>
);

export default Clock;
