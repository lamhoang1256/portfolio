import { Heading } from "components/text";
import { LayoutHome } from "layouts";
import { ProjectCard } from "modules/project";
import { IProject } from "types/project";
import sanityClient from "utils/sanityClient";

interface ProjectsPageProps {
  projects: IProject[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  return (
    <LayoutHome>
      <section className="mt-20 layout-container">
        <div className="text-center">
          <Heading>Feature Projects</Heading>
        </div>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
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
