import { SVGProps } from "react";
import Shisa from "../shisa";

const ChatCheck: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M23 11C23 16.0208 18.0751 19.5 12 19.5C8.17391 19.5 6.75 22 4 22C1.25 22 6.0365 18.6499 4 17C1.9635 15.3501 1 13.5431 1 11C1 5.97923 5.92487 2 12 2C18.0751 2 23 5.97923 23 11Z" />
    <path d="M8 11.2355C8 11.2355 9.73135 16.3336 12.2355 14.6642C13.4456 13.8574 16.2693 7 16.2693 7" />
  </Shisa>
);

export default ChatCheck;
