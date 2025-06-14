import { SVGProps } from "react";
import Shisa from "../shisa";

const Bookmark: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M7 3H17C18.1046 3 19 3.89543 19 5V20.5928C18.9998 21.398 18.1106 21.8518 17.4668 21.4395L17.3418 21.3447L12.9873 17.5352L12.8789 17.4482C12.3554 17.0693 11.6446 17.0693 11.1211 17.4482L11.0127 17.5352L6.6582 21.3447C6.0117 21.9104 5.00024 21.4517 5 20.5928V5L5.01074 4.7959C5.11301 3.78722 5.96435 3 7 3Z" />
  </Shisa>
);

export default Bookmark;
