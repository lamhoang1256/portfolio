import { LayoutHome } from "layouts";
import { HomeAboutMe, HomeIntro } from "modules/home";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <LayoutHome>
      <HomeIntro />
      <HomeAboutMe />
    </LayoutHome>
  );
};

export default HomePage;
