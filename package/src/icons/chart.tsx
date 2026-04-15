import { SVGProps } from "react";
import Shisa from "../shisa";

const Chart: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M8 23V11H2C1.44772 11 1 11.4477 1 12V22C1 22.5523 1.44772 23 2 23H8ZM8 23H16M8 23V2C8 1.44772 8.44772 1 9 1H15C15.5523 1 16 1.44772 16 2V23M16 23H22C22.5523 23 23 22.5523 23 22V7C23 6.44772 22.5523 6 22 6H16V23Z" />
  </Shisa>
);

export default Chart;
