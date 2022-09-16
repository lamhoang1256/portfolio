import { HTMLAttributes } from "react";
import classNames from "utils/className";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading = ({ children, className = "" }: HeadingProps) => {
  return (
    <h2
      className={classNames(
        "text-2xl leading-normal lg:text-4xl font-montserrat font-semibold mb-3",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
