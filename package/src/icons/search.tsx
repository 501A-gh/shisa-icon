import { SVGProps } from "react";
import Shisa from "../shisa";

const Search: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M15.5 15.5L21 21" />
    <circle cx="10.5" cy="10.5" r="6.5" />
  </Shisa>
);

export default Search;
