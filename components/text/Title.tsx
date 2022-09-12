import { HTMLAttributes } from "react";
import classNames from "utils/className";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Title = ({ children, className = "" }: TitleProps) => {
  return (
    <h3 className={classNames("text-2xl font-montserrat font-semibold", className)}>{children}</h3>
  );
};

export default Title;
