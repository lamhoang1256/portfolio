import { Card } from "components/card";
import { Heading } from "components/text";
import { PATH } from "constants/path";
import Link from "next/link";
import { IProject } from "types/project";
import { sanityImgUrl } from "utils/sanityImgUrl";

interface HomeFeatureProps {
  projects: IProject[];
}

const HomeFeature = ({ projects }: HomeFeatureProps) => {
  return (
    <section className="py-10">
      <div className="layout-container">
        <div className="text-center">
          <Heading>Feature Projects</Heading>
          <p>I&apos;m sure you will like my projects</p>
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
        <Link href={PATH.project}>
          <button className="block py-3 mx-auto mt-6 rounded-lg bg-green82 px-7 bg-linearPurple">
            View more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeFeature;
