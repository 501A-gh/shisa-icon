import { SVGProps } from "react";
import Shisa from "../shisa";

const File: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M10 5V16.9992C10 18.1038 10.8954 18.9992 12 18.9992C13.1046 18.9992 14 18.1038 14 16.9992V5C14 2.79086 12.2091 1 10 1C7.79086 1 6 2.79086 6 5V17C6 20.3137 8.68629 23 12 23C15.3137 23 18 20.3137 18 17V10" />
  </Shisa>
);

export default File;
