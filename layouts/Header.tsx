import { IconClose, IconMenu } from "components/icons";
import { Image } from "components/image";
import { LinkTargetBlank, WrapLink } from "components/link";
import { PATH } from "constants/path";
import Link from "next/link";
import { useRef } from "react";
const links = [
  { path: PATH.home, display: "Home" },
  { path: PATH.project, display: "Projects" },
  { path: PATH.post, display: "Posts" },
  { path: PATH.resume, display: "Resume" }
];

const Header = () => {
  const navbarRef = useRef<HTMLElement | null>(null);
  const handleToggleNavbar = () => {
    if (!navbarRef.current) return;
    navbarRef.current.classList.toggle("-translate-x-full");
  };
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="layout-container">
        <div className="flex items-center justify-between mt-4 md:hidden">
          <Link href={PATH.home}>
            <a>
              <Image src="/favicon.ico" alt="Favicon" className="w-[26px] h-[26px]" />
            </a>
          </Link>
          <button type="button" onClick={handleToggleNavbar}>
            <IconMenu />
          </button>
        </div>
        <nav ref={navbarRef} className="fixed inset-0 -translate-x-full md:translate-x-0 md:static">
          <button
            type="button"
            className="absolute top-6 right-6 md:hidden"
            onClick={handleToggleNavbar}
          >
            <IconClose />
          </button>
          <ul className="flex flex-col w-full h-full gap-8 p-8 font-medium bg-[#0d0321] md:items-center md:justify-center md:bg-transparent md:flex-row lg:gap-10">
            {links.map((link) => {
              if (link.path === PATH.resume) {
                return (
                  <li key={link.path}>
                    <LinkTargetBlank href={link.path} onClick={handleToggleNavbar}>
                      {link.display}
                    </LinkTargetBlank>
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
