import { SVGProps } from "react";
import Shisa from "../shisa";

const DragHandleHorizontal: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <Shisa {...props}>
    <circle fill="currentColor" stroke="none" cx="18" cy="9" r="2" />
    <circle fill="currentColor" stroke="none" cx="12" cy="9" r="2" />
    <circle fill="currentColor" stroke="none" cx="18" cy="15" r="2" />
    <circle fill="currentColor" stroke="none" cx="12" cy="15" r="2" />
    <circle fill="currentColor" stroke="none" cx="6" cy="15" r="2" />
    <circle fill="currentColor" stroke="none" cx="6" cy="9" r="2" />
  </Shisa>
);

export default DragHandleHorizontal;
