import { SVGProps } from "react";
import Shisa from "../shisa";

const Home: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M4 7V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V7" />
    <path d="M23 9L13.0738 2.6833C12.4186 2.26639 11.5814 2.26639 10.9262 2.6833L6.5 5.5L1 9" />
    <circle cx="12" cy="14" r="3" />
  </Shisa>
);

export default Home;
