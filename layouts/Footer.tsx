import { LinkTargetBlank } from "components/link";

const Footer = () => {
  return (
    <footer className="py-10 text-center">
      <p>
        Designed & Developed by{" "}
        <LinkTargetBlank
          href="https://github.com/lamhoang1256"
          className="font-semibold text-blue57"
        >
          Nguyen Hoang Lam
        </LinkTargetBlank>
      </p>
      <p>Copyright © 2022 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
