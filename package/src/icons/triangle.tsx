import { SVGProps } from "react";
import Shisa from "../shisa";

const Triangle: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M11.1426 4.37305C11.531 3.72571 12.469 3.72571 12.8574 4.37305L21.3252 18.4854C21.7251 19.1518 21.245 19.9999 20.4678 20H3.53223C2.75502 19.9999 2.27492 19.1518 2.6748 18.4854L11.1426 4.37305Z" />
  </Shisa>
);

export default Triangle;
