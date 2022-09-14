import { LayoutHome } from "layouts";
import {
  HomeAboutMe,
  HomeCanvas,
  HomeFeature,
  HomeIntro,
  HomeMySkills,
  HomeVSExtensions,
} from "modules/home";
import { ISkill } from "types";
import { IProject } from "types/project";
import sanityClient from "utils/sanityClient";

interface HomePageProps {
  projects: IProject[];
  skills: ISkill[];
}

const HomePage = ({ projects, skills }: HomePageProps) => {
  return (
    <LayoutHome>
      <HomeCanvas />
      <HomeIntro />
      <HomeAboutMe />
      <HomeMySkills skills={skills} />
      <HomeFeature projects={projects} />
      <HomeVSExtensions />
    </LayoutHome>
  );
};

export async function getStaticProps() {
  const projects = await sanityClient.fetch(`*[_type == "project"]`);
  const skills = await sanityClient.fetch(`*[_type == "skill"]`);
  return {
    props: {
      projects,
      skills,
    },
  };
}

export default HomePage;
