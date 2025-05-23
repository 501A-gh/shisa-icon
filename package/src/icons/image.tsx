import { SVGProps } from "react";
import Shisa from "../shisa";

const Image: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="1" y="1" width="22" height="22" rx="5" />
    <path d="M23 17.818L19.989 14.5942C19.1884 13.737 17.8254 13.7496 17.0407 14.6214L15.5643 16.2619C14.7426 17.1748 13.3 17.1384 12.5255 16.1852L9.05223 11.9104C8.25184 10.9253 6.74815 10.9253 5.94777 11.9104L1 18" />
    <circle cx="16.5" cy="7.5" r="2.5" />
  </Shisa>
);

export default Image;
