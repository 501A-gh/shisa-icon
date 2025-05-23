import { SVGProps } from "react";
import Shisa from "../shisa";

const Expand: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M5 9L10.6984 4.11564C11.4474 3.47366 12.5526 3.47366 13.3016 4.11564L19 9" />
    <path d="M5 15L10.6984 19.8844C11.4474 20.5263 12.5526 20.5263 13.3016 19.8844L19 15" />
  </Shisa>
);

export default Expand;
