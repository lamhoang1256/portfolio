import { Heading } from "components/text";
import { ProjectItem } from "modules/project";

const HomeFeature = () => {
  return (
    <section className="mt-20">
      <div className="mt-20 layout-container">
        <div className="text-center">
          <Heading>Feature Projects</Heading>
        </div>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
        <button className="block py-3 mx-auto mt-6 rounded-lg bg-green82 px-7 bg-linearPurple">
          View more
        </button>
      </div>
    </section>
  );
};

export default HomeFeature;
