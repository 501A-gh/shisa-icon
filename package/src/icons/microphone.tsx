import { SVGProps } from "react";
import Shisa from "../shisa";

const Microphone: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="9" y="2" width="6" height="13" rx="3" />
    <path d="M5.00002 12C5.00002 12 4.50006 19 12 19M12 19C19.5 19 19 12 19 12M12 19V23M12 23H8.00006M12 23H16.0001" />
  </Shisa>
);

export default Microphone;
