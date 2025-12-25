import { SVGProps } from "react";
import Shisa from "../shisa";

const ShisaFileXls: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 1H13.5146C14.8407 1 16.1121 1.52718 17.0498 2.46484L20.293 5.70703L22.5352 7.9502C23.4728 8.88787 24 10.1593 24 11.4854V18C24 20.7614 21.7614 23 19 23H7C4.23858 23 2 20.7614 2 18V6C2 3.23858 4.23858 1 7 1Z" />
    <path d="M6 10L9 18M9 10L6 18M11.5 10V18H13.5M16 18H19V14H16V10H19" />
  </Shisa>
);

export default ShisaFileXls;
