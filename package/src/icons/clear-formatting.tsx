import { SVGProps } from "react";
import Shisa from "../shisa";

const ClearFormatting: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M9 4H13M20 4H13M13 4L11.75 8M8 20L9.5625 15" />
    <path d="M4 5L19 20" />
  </Shisa>
);

export default ClearFormatting;
