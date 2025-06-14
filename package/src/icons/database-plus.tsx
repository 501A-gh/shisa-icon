import { SVGProps } from "react";
import Shisa from "../shisa";

const DatabasePlus: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M21 12C21 15 16.9706 17 12 17C7.02944 17 3 15 3 12M21 12C21 12 21 15 21 18C21 21 16.9706 23 12 23C7.02944 23 3 21 3 18C3 15 3 12 3 12M21 12V11M3 12V6M12 11C7 11 3 9 3 6M3 6C3 3 7 1 12 1" />
    <circle cx="7" cy="13" r="1" fill="currentColor" stroke="none" />
    <circle cx="7" cy="19" r="1" fill="currentColor" stroke="none" />
    <path d="M15 6H21" />
    <path d="M18 3V9" />
  </Shisa>
);

export default DatabasePlus;
