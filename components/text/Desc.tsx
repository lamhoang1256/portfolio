import { HTMLAttributes } from "react";
import classNames from "utils/className";

interface DescProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Desc = ({ children, className = "" }: DescProps) => {
  return <p className={classNames("text-base opacity-[72] text-white", className)}>{children}</p>;
};

export default Desc;
