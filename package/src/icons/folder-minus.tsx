import { SVGProps } from "react";
import Shisa from "../shisa";

const FolderMinus: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M1 9V16C1 19.3137 3.68629 22 7 22H17C20.3137 22 23 19.3137 23 16V9M23 9V10M23 9C23 6.79086 21.2091 5 19 5H13.5811C12.6369 5 11.7986 4.39579 11.5 3.5C11.2014 2.60421 10.3631 2 9.41886 2H5C2.79086 2 1 3.79086 1 6V10" />
    <path d="M8 12.9199H16" />
  </Shisa>
);

export default FolderMinus;
