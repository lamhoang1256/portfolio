import { LinkTargetBlank, WrapLink } from "components/link";
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
    path: PATH.resume,
    display: "Resume"
  }
];

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="layout-container">
        <nav className="py-8">
          <ul className="flex items-center justify-center gap-8 font-medium lg:gap-10">
            {links.map((link) => {
              if (link.path === PATH.resume) {
                return (
                  <li key={link.path}>
                    <LinkTargetBlank href={link.path}>{link.display}</LinkTargetBlank>
                  </li>
                );
              }
              return (
                <li key={link.path}>
                  <WrapLink href={link.path}>{link.display}</WrapLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
