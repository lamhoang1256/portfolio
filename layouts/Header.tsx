import Link from "next/link";
const links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/project",
    display: "Projects",
  },
  {
    path: "/post",
    display: "Posts",
  },
  {
    path: "/cv",
    display: "CV",
  },
];

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="layout-container">
        <nav className="py-5">
          <ul className="flex items-center gap-10 font-medium">
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <a>{link.display}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
