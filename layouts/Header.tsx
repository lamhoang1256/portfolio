import { WrapLink } from "components/link";
import { PATH } from "constants/path";
const links = [
  {
    path: PATH.home,
    display: "Home"
  },
  {
    path: PATH.project,
    display: "Projects"
  },
  {
    path: PATH.post,
    display: "Posts"
  },
  {
    path: PATH.cv,
    display: "CV"
  }
];

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="layout-container">
        <nav className="py-8">
          <ul className="flex items-center justify-center gap-10 font-medium">
            {links.map((link) => (
              <li key={link.path}>
                <WrapLink href={link.path}>{link.display}</WrapLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
