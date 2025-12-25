import { SVGProps } from "react";
import Shisa from "../shisa";

const ShisaFilePpt: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 1H12.5146C13.8407 1 15.1121 1.52718 16.0498 2.46484L19.293 5.70703L21.5352 7.9502C22.4728 8.88787 23 10.1593 23 11.4854V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1Z" />
    <path d="M4.5 18V15M4.5 15V11C4.5 10.4477 4.94772 10 5.5 10H7C7.55228 10 8 10.4477 8 11V14C8 14.5523 7.55228 15 7 15H6.5H4.5Z" />
    <path d="M10.5 18V15M10.5 15V11C10.5 10.4477 10.9477 10 11.5 10H13C13.5523 10 14 10.4477 14 11V14C14 14.5523 13.5523 15 13 15H10.5Z" />
    <path d="M16.5 10H18M19.5 10H18M18 10V18" />
  </Shisa>
);

export default ShisaFilePpt;
