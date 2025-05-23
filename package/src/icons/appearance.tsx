import { SVGProps } from "react";
import Shisa from "../shisa";

const Appearance: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M16.9366 21.4838C20.9366 20.5731 24.2857 10 22 5.99999C18 -1 7.9367 1.48362 3.4366 6.98356C-1.06349 12.4835 1.61606 17.2102 3.93666 17.9837C8.43665 19.4837 10.1268 16.1978 12.7862 17.7382C14.9366 18.9838 13.9598 22.1616 16.9366 21.4838Z" />
    <circle cx="6" cy="13" r="2" fill="currentColor" stroke="none" />
    <circle cx="10" cy="9" r="2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="7" r="2" fill="currentColor" stroke="none" />
  </Shisa>
);

export default Appearance;
