import { SVGProps } from "react";
import Shisa from "../shisa";

const Trash: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M3 5L4.30565 19.3621C4.49295 21.4225 6.22041 23 8.28922 23H15.7108C17.7796 23 19.507 21.4225 19.6944 19.3621L21 5" />
    <path d="M8 18L7.5 10" />
    <path d="M12 18V10" />
    <path d="M18 5V5C18 2.79086 16.2091 1 14 1L10 1C7.79086 1 6 2.79086 6 5V5" />
    <path d="M1 5H22.9999" />
    <path d="M16 18L16.5 10" />
  </Shisa>
);

export default Trash;
