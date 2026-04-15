import { SVGProps } from "react";
import Shisa from "../shisa";

const DragHandleVertical: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <Shisa {...props}>
    <circle fill="currentColor" stroke="none" cx="15" cy="6" r="2" />
    <circle fill="currentColor" stroke="none" cx="9" cy="6" r="2" />
    <circle fill="currentColor" stroke="none" cx="15" cy="12" r="2" />
    <circle fill="currentColor" stroke="none" cx="9" cy="12" r="2" />
    <circle fill="currentColor" stroke="none" cx="15" cy="18" r="2" />
    <circle fill="currentColor" stroke="none" cx="9" cy="18" r="2" />
  </Shisa>
);

export default DragHandleVertical;
