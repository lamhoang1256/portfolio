import { LayoutHome } from "layouts";
import { HomeAboutMe, HomeFeature, HomeIntro, HomeMySkills, HomeVSExtensions } from "modules/home";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <LayoutHome>
      <HomeIntro />
      <HomeAboutMe />
      <HomeMySkills />
      <HomeFeature />
      <HomeVSExtensions />
    </LayoutHome>
  );
};

export default HomePage;
