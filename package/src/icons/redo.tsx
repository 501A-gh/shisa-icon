import { SVGProps } from "react";
import Shisa from "../shisa";

const Redo: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M20 13V17C20 19.2091 18.2091 21 16 21H8C5.79086 21 4 19.2091 4 17V16.5556" />
    <path d="M4 12V8C4 5.79086 5.79086 4 8 4L16 4C18.2091 4 20 5.79086 20 8V8.44444" />
    <path d="M23 16L20.8 13.0667C20.4 12.5333 19.6 12.5333 19.2 13.0667L17 16" />
    <path d="M1 9L3.2 11.9333C3.6 12.4667 4.4 12.4667 4.8 11.9333L7 9" />
  </Shisa>
);

export default Redo;
