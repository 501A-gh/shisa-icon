import { SVGProps } from "react";
import Shisa from "../shisa";

const ShisaHamburgerMenu: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <Shisa {...props}>
    <path d="M5 7L19 7" />
    <path d="M5 12L19 12" />
    <path d="M5 17L19 17" />
  </Shisa>
);

export default ShisaHamburgerMenu;
