import { SVGProps } from "react";
import Shisa from "../shisa";

const Bookmark: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M7 3H17C18.1046 3 19 3.89543 19 5V19.8438C18.9997 20.6994 18.0133 21.1351 17.3828 20.6309L17.2617 20.5176L13.1074 15.9678L12.9912 15.8535C12.4266 15.355 11.5734 15.355 11.0088 15.8535L10.8926 15.9678L6.73828 20.5176C6.12276 21.1916 5.00033 20.7564 5 19.8438V5C5 3.89543 5.89543 3 7 3Z" />
  </Shisa>
);

export default Bookmark;
