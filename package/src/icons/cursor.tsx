import { SVGProps } from "react";
import Shisa from "../shisa";

const Cursor: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M19 19L12 12M12 12L10.7789 16.8845C10.5409 17.8365 9.21696 17.9119 8.87241 16.9931L4.77247 6.05992C4.47101 5.25604 5.25604 4.47101 6.05992 4.77247L16.9931 8.87241C17.9119 9.21696 17.8365 10.5409 16.8845 10.7789L12 12Z" />
  </Shisa>
);

export default Cursor;
