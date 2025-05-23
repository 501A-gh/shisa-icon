import { SVGProps } from "react";
import Shisa from "../shisa";

const Folder: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M23 10V17C23 19.7614 20.7614 22 18 22H6C3.23858 22 1 19.7614 1 17V10H23Z" />
    <path d="M1 10L1 6C1 3.79086 2.79086 2 5 2L9.41886 2C10.3631 2 11.2014 2.60421 11.5 3.5V3.5C11.7986 4.39579 12.6369 5 13.5811 5H17L19 5C21.2091 5 23 6.79086 23 9L23 10" />
  </Shisa>
);

export default Folder;
