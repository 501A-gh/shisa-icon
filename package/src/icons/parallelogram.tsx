import { SVGProps } from "react";
import Shisa from "../shisa";

const Parallelogram: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M6.92578 4H20.2432C21.5261 4.00019 22.4771 5.19122 22.1934 6.44238L19.4697 18.4424C19.263 19.3532 18.4535 20 17.5195 20H3.8623C2.55703 20 1.6019 18.7696 1.9248 17.5049L4.98828 5.50488C5.20035 4.67489 5.91449 4.07823 6.75586 4.00684L6.92578 4Z" />
  </Shisa>
);

export default Parallelogram;
