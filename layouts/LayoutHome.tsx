import Footer from "./Footer";
import Header from "./Header";

interface LayoutHomeProps {
  children: React.ReactNode;
}

const LayoutHome = ({ children }: LayoutHomeProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutHome;
