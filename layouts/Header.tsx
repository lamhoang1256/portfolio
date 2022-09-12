import Link from "next/link";

const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="layout-container">
        <nav className="py-8">
          <ul className="flex items-center gap-10 text-sm">
            <li className="relative after:absolute after:-bottom-1 px-1 after:right-0 after:left-0 after:w-full after:h-[2px] after:bg-purplea5">
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
