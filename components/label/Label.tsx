import { LabelHTMLAttributes } from "react";
import classNames from "utils/classNames";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ htmlFor, className = "", children, ...props }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={classNames("cursor-pointer", className)} {...props}>
      {children}
    </label>
  );
};

export default Label;
