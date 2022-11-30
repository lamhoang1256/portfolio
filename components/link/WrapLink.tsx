import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface WrapLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const WrapLink = ({ children, href = "/", ...props }: WrapLinkProps) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default WrapLink;
