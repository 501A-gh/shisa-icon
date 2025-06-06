import { SVGProps } from "react";
import Shisa from "../shisa";

const Pin: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M9.13278 3H14.8672C15.4687 3 15.9341 3.52718 15.8595 4.12403L15.0303 10.7573C15.0112 10.9105 15.0638 11.0638 15.1729 11.1729L17.1464 13.1464C17.4614 13.4614 17.2383 14 16.7929 14H7.20711C6.76165 14 6.53857 13.4614 6.85355 13.1464L8.82708 11.1729C8.93619 11.0638 8.98881 10.9105 8.96967 10.7573L8.1405 4.12403C8.0659 3.52718 8.53128 3 9.13278 3Z" />
    <path d="M12 21V14" />
  </Shisa>
);

export default Pin;
