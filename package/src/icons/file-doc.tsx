import { SVGProps } from "react";
import Shisa from "../shisa";

const ShisaFileDoc: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M6.99999 12C6.99998 7.53536 5.85713 8.01502 3.00002 8.01502V12L3.00001 15.985C5.85713 15.985 7 16.4647 6.99999 12Z" />
    <rect x="10" y="8" width="4" height="8" rx="0.75" />
    <path d="M21 9.5V8H17V16H21V14.5" />
  </Shisa>
);

export default ShisaFileDoc;
