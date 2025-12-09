import { SVGProps } from "react";
import Shisa from "../shisa";

const Trapezoid: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M6.84277 4H17.1572C18.0748 4 18.875 4.62449 19.0977 5.51465L22.0977 17.5146C22.4132 18.7769 21.4584 20 20.1572 20H3.84277C2.54163 20 1.58677 18.7769 1.90234 17.5146L4.90234 5.51465C5.12504 4.62449 5.92515 4 6.84277 4Z" />
  </Shisa>
);

export default Trapezoid;
