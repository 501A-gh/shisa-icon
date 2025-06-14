import { SVGProps } from "react";
import Shisa from "../shisa";

const Reload: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.4895 3.8089 5.40148 6.54545 3.61721" />
    <path d="M7 8V3.5C7 3.22386 6.77614 3 6.5 3H2" />
  </Shisa>
);

export default Reload;
