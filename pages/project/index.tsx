import { Card } from "components/card";
import { Heading } from "components/text";
import { PATH } from "constants/path";
import { LayoutHome } from "layouts";
import { IProject } from "types/project";
import sanityClient from "utils/sanityClient";
import { sanityImgUrl } from "utils/sanityImgUrl";

interface ProjectsPageProps {
  projects: IProject[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  console.log("projects: ", projects);
  return (
    <LayoutHome>
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
              image={sanityImgUrl(project.mainImage).width(500).url()}
              description={project.description}
            />
          ))}
        </div>
      </section>
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

export default ProjectsPage;
