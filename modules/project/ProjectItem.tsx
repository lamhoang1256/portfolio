import Image from "next/image";

interface ProjectItemProps {}

const ProjectItem = ({}: ProjectItemProps) => {
  return (
    <div className="pb-5 rounded-xl bg-slate-800">
      <div className="overflow-hidden rounded-xl">
        <Image
          src="/easy-home.png"
          alt="project"
          width="500px"
          height="300px"
          className="object-cover object-top transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 pt-3">
        <h3 className="text-lg font-bold uppercase text-green82">Youme</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia ullam itaque
          temporibus culpa. Doloribus recusandae possimus unde. Ipsa cum quia praesentium vero culpa
          labore exercitationem id eveniet, quos dolores.
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
