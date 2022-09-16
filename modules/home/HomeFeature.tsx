import { Heading } from "components/text";
import { ProjectItem } from "modules/project";
import { IProject } from "types/project";

interface HomeFeatureProps {
  projects: IProject[];
}

const HomeFeature = ({ projects }: HomeFeatureProps) => {
  return (
    <section className="mt-20">
      <div className="layout-container">
        <div className="text-center">
          <Heading>Feature Projects</Heading>
          <p>I&apos;m sure you will like my projects</p>
        </div>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>
        <button className="block py-3 mx-auto mt-6 rounded-lg bg-green82 px-7 bg-linearPurple">
          View more
        </button>
      </div>
    </section>
  );
};

export default HomeFeature;
