import { SVGProps } from "react";
import Shisa from "../shisa";

const Variables: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M14 7V9.625C14 9.625 14 14 17.5 14C21 14 21 9.625 21 9.625V7" />
    <path d="M3 7C8.33333 7 8.33333 14 3 14M11 7C5.66667 7 5.66667 14 11 14" />
    <path d="M21 7V18.25C21 18.25 21 22 17 22C13 22 13 18.25 13 18.25" />
  </Shisa>
);

export default Variables;
