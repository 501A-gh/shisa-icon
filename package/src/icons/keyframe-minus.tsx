import { SVGProps } from "react";
import Shisa from "../shisa";

const KeyframeMinus: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M11.2929 2.70711L2.70711 11.2929C2.31658 11.6834 2.31658 12.3166 2.70711 12.7071L11.2929 21.2929C11.6834 21.6834 12.3166 21.6834 12.7071 21.2929L21.2929 12.7071C21.6834 12.3166 21.6834 11.6834 21.2929 11.2929L12.7071 2.70711C12.3166 2.31658 11.6834 2.31658 11.2929 2.70711Z" />
    <path d="M8 11.9199H16" />
  </Shisa>
);

export default KeyframeMinus;
