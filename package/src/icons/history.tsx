import { SVGProps } from "react";
import Shisa from "../shisa";

const History: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M15 15L12 12" />
    <path d="M12 12L12 7" />
    <path d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 8.13845 21.0102 4.74163 18 2.77893" />
    <path d="M17 7V2.5C17 2.22386 17.2239 2 17.5 2H22" />
  </Shisa>
);

export default History;
