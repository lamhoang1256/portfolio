import Image from "next/image";
import Link from "next/link";
import { IProject } from "types/project";
import { sanityImgUrl } from "utils/sanityImgUrl";

interface ProjectItemProps {
  project: IProject;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const { mainImage, slug, title, description } = project;
  return (
    <div className="overflow-hidden border border-gray-600 rounded-xl bg-linearPurple2">
      <Link href={`/project/${slug.current}`}>
        <a className="overflow-hidden rounded-xl">
          <Image
            alt={slug.current}
            width={500}
            height={300}
            src={sanityImgUrl(mainImage).width(500).url()}
            className="object-cover object-top transition-all duration-300 hover:scale-105"
          />
        </a>
      </Link>
      <div className="p-4 pt-3">
        <Link href={`/project/${slug.current}`}>
          <a>
            <h3 className="text-lg font-bold text-green82">{title}</h3>
          </a>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
