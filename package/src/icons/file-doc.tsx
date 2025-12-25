import { SVGProps } from "react";
import Shisa from "../shisa";

const ShisaFileDoc: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 1H12.5146C13.8407 1 15.1121 1.52718 16.0498 2.46484L19.293 5.70703L21.5352 7.9502C22.4728 8.88787 23 10.1593 23 11.4854V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1Z" />
    <path d="M7.5 14.0151C7.49999 9.53361 6.5 10.0151 4.00002 10.0151V14.0151L4.00001 18.0151C6.5 18.0151 7.50001 18.4965 7.5 14.0151Z" />
    <rect x="10" y="10" width="3.5" height="8.03" rx="0.75" />
    <path d="M19.5 11.5V10H16V18H19.5V16.5" />
  </Shisa>
);

export default ShisaFileDoc;
