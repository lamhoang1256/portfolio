import { LayoutHome } from "layouts";
import { HomeIntro } from "modules/home";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <LayoutHome>
      <HomeIntro />
    </LayoutHome>
  );
};

export default HomePage;
