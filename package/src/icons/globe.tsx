import { SVGProps } from "react";
import Shisa from "../shisa";

const Globe: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 1.5V22.5" />
    <path d="M1 12.0001C1 12.0001 3 14.4998 12 14.5C21 14.5002 23 12.0001 23 12.0001" />
    <path d="M12 22.5C12 22.5 17.4998 21 17.5 12C17.5002 3 12 1.5 12 1.5" />
    <path d="M12 22.5C12 22.5 6.50021 21 6.5 12C6.49979 3 12 1.5 12 1.5" />
    <circle cx="12" cy="12" r="11" />
  </Shisa>
);

export default Globe;
