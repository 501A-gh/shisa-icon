import { SVGProps } from "react";
import Shisa from "../shisa";

const Refresh: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M23 15L21.6735 12.3471C21.3537 11.7074 20.4853 11.6005 20.0199 12.1435L18 14.5" />
    <path d="M1 9L2.32646 11.6529C2.6463 12.2926 3.51471 12.3995 3.98014 11.8565L6 9.5" />
    <path d="M21 12C21 16.9706 16.9706 21 12 21C8.87958 21 6.13007 19.412 4.51555 17M3 12C3 7.02944 7.02944 3 12 3C15.1204 3 17.8699 4.58803 19.4845 7" />
  </Shisa>
);

export default Refresh;
