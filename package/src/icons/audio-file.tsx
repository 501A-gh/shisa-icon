import { SVGProps } from "react";
import Shisa from "../shisa";

const AudioFile: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <path d="M6 1H12.5146C13.7578 1 14.9529 1.46347 15.8701 2.29395L16.0498 2.46484L19.293 5.70703L21.5352 7.9502C22.4728 8.88787 23 10.1593 23 11.4854V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1Z" />
    <path d="M10 6L10 18" />
    <path d="M14 9V15" />
    <path d="M18 11V13" />
    <path d="M6 11V13" />
  </Shisa>
);

export default AudioFile;
