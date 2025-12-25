import { SVGProps } from "react";
import Shisa from "../shisa";

const ShisaPageBreak: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M4 8.5V5C4 3.34315 5.34315 2 7 2H13.8723C14.9488 2 15.9798 2.43386 16.7323 3.20353L18.86 5.37957C19.5908 6.12697 20 7.13074 20 8.17604V8.5M4 15.5V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V15.5" />
    <path d="M1 12H3" />
    <path d="M6 12H8" />
    <path d="M11 12H13" />
    <path d="M16 12H18" />
    <path d="M21 12H23" />
  </Shisa>
);

export default ShisaPageBreak;
