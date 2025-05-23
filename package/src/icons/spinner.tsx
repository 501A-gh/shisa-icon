import { SVGProps } from "react";
import Shisa from "../shisa";

const Spinner: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M12 0.999695V6" />
    <path d="M12 18V23" />
    <path d="M18 12H23" />
    <path d="M1 12L6 12" />
    <path d="M4.22174 4.22156L7.75749 7.75731" />
    <path d="M16.2427 16.2426L19.7783 19.7781" />
    <path d="M16.2427 7.75729L19.7783 4.22176" />
    <path d="M4.22192 19.7781L7.75746 16.2426" />
  </Shisa>
);

export default Spinner;
