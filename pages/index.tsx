import { REVALIDATE_TIME, REVALIDATE_TIME_ERROR } from "constants/global";
import { LayoutHome } from "layouts";
import {
  HomeAboutMe,
  HomeCanvas,
  HomeContact,
  HomeFeatured,
  HomeIntro,
  HomeMySkills,
  HomeVSExtensions
} from "modules/home";
import { GetStaticProps } from "next";
import { ISkill } from "types";
import { IProject } from "types/project";
import sanityClient from "utils/sanityClient";

interface HomePageProps {
  projects: IProject[];
  skills: ISkill[];
}

const HomePage = ({ projects, skills }: HomePageProps) => {
  return (
    <LayoutHome className="-mt-[88px]">
      <HomeCanvas />
      <HomeIntro />
      <HomeAboutMe />
      <HomeMySkills skills={skills} />
      <HomeFeatured projects={projects} />
      <HomeVSExtensions />
      <HomeContact />
    </LayoutHome>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const projects = await sanityClient.fetch(`*[_type == "project" && featured == true]`);
    const skills = await sanityClient.fetch(`*[_type == "skill"]`);
    return {
      props: { projects, skills },
      revalidate: REVALIDATE_TIME
    };
  } catch (error) {
    return {
      props: { projects: [], skills: [] },
      revalidate: REVALIDATE_TIME_ERROR,
      notFound: true
    };
  }
};

export default HomePage;
