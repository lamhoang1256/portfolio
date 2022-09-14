import { LayoutHome } from "layouts";
import {
  HomeAboutMe,
  HomeCanvas,
  HomeFeature,
  HomeIntro,
  HomeMySkills,
  HomeVSExtensions,
} from "modules/home";
import { IProject } from "types/project";
import sanityClient from "utils/sanityClient";

interface HomePageProps {
  projects: IProject[];
}

const HomePage = ({ projects }: HomePageProps) => {
  console.log("projects: ", projects);
  return (
    <LayoutHome>
      <HomeCanvas />
      <HomeIntro />
      <HomeAboutMe />
      <HomeMySkills />
      <HomeFeature projects={projects} />
      <HomeVSExtensions />
    </LayoutHome>
  );
};

export async function getStaticProps() {
  const projects = await sanityClient.fetch(`*[_type == "project"]`);
  return {
    props: {
      projects,
    },
  };
}

export default HomePage;
