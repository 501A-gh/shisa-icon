import { SVGProps } from "react";
import Shisa from "../shisa";

const Cloud: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M4 19H19C19 19 23 19 23 14.5C23 9.99998 18.5 10 18.5 10C18.5 10 17.5 5.00001 12 5C4.5 4.99998 5 13 5 13C5 13 1 12.5 1 16C1 19 4 19 4 19Z" />
  </Shisa>
);

export default Cloud;
