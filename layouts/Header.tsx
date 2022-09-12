import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="layout-container">
        <nav className="py-5">
          <ul className="flex items-center gap-10 font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/">Posts</Link>
            </li>
            <li>
              <Link href="/">CV</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
