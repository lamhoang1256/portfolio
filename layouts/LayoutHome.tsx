import { HTMLAttributes } from "react";
import classNames from "utils/className";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutHomeProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const LayoutHome = ({ children, className = "" }: LayoutHomeProps) => {
  return (
    <div className={classNames("flex flex-col min-h-screen", className)}>
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutHome;
