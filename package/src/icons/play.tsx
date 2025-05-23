import { SVGProps } from "react";
import Shisa from "../shisa";

const Play: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M18.1216 12.424L6.765 19.5219C6.43198 19.73 6 19.4906 6 19.0979V4.90212C6 4.50941 6.43198 4.26998 6.765 4.47812L18.1216 11.576C18.4349 11.7718 18.4349 12.2282 18.1216 12.424Z" />
  </Shisa>
);

export default Play;
