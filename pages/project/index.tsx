import { Card } from "components/card";
import { Meta } from "components/meta";
import { Heading } from "components/text";
import { PATH } from "constants/path";
import { LayoutHome } from "layouts";
import { GetStaticProps } from "next";
import { IProject } from "types/project";
import sanityClient from "utils/sanityClient";
import { sanityImgUrl, sanityImgCard } from "utils/sanityImage";

interface ProjectsPageProps {
  projects: IProject[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  return (
    <LayoutHome>
      <Meta title="Projects" />
      <section className="mt-20 layout-container">
        <div className="text-center">
          <Heading>Projects</Heading>
        </div>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project._id}
              title={project.title}
              slug={project.slug.current}
              path={`${PATH.project}/${project.slug.current}`}
              image={sanityImgCard(project.mainImage)}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </LayoutHome>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const projects = await sanityClient.fetch(`*[_type == "project"]`);
    return { props: { projects }, revalidate: 86400 };
  } catch (error) {
    return { props: { projects: [] }, revalidate: 86400 };
  }
};

export default ProjectsPage;
