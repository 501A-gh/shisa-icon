import { SVGProps } from "react";
import Shisa from "../shisa";

const Replay: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M16.3216 12.424L9.765 16.5219C9.43198 16.73 9 16.4906 9 16.0979V7.90212C9 7.50941 9.43198 7.26998 9.765 7.47812L16.3216 11.576C16.6349 11.7718 16.6349 12.2282 16.3216 12.424Z" />
    <path d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 8.13845 21.0102 4.74163 18 2.77893" />
    <path d="M17 7V2.5C17 2.22386 17.2239 2 17.5 2H22" />
  </Shisa>
);

export default Replay;
