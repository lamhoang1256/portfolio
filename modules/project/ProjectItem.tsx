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
    <div className="rounded-xl bg-linearPurple2">
      <Link href={`/project/${slug.current}`}>
        <div className="overflow-hidden cursor-pointer rounded-xl">
          <Image
            alt={slug.current}
            width={500}
            height={300}
            src={sanityImgUrl(mainImage).width(500).url()}
            className="object-cover object-top transition-all duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4 pt-3">
        <Link href={`/project/${slug.current}`}>
          <h3 className="text-lg font-bold cursor-pointer text-green82">{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
