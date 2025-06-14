import { SVGProps } from "react";
import Shisa from "../shisa";

const Windows: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="13" y="1" width="10" height="8" rx="2" />
    <path d="M9 20V20.5C9 21.8807 10.1193 23 11.5 23H17.5C18.8807 23 20 21.8807 20 20.5V15" />
    <path d="M10 3H3.5C2.11929 3 1 4.11929 1 5.5V14.5C1 15.8807 2.11929 17 3.5 17H14.5C15.8807 17 17 15.8807 17 14.5V12" />
    <circle cx="4" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="7" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="10" cy="6" r="1" fill="currentColor" stroke="none" />
  </Shisa>
);

export default Windows;
