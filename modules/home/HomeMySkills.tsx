import { Heading } from "components/text";
import Image from "next/image";
import Link from "next/link";
import { ISkill } from "types";

interface HomeMySkillsProps {
  skills: ISkill[];
}

const HomeMySkills = ({ skills }: HomeMySkillsProps) => {
  console.log("skills: ", skills);
  return (
    <div className=" layout-container">
      <div className="mt-20 text-center">
        <Heading>My skills & Knowledge</Heading>
        <p className="mt-3">Technologies and languages that I use to make my product everyday</p>
      </div>
      <div className="grid grid-cols-3 mx-auto mt-8 sm:w-max sm:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <Link href={skill.url} key={skill._id}>
            <a className="flex flex-col text-center hover:scale-105 transition-all duration-200">
              <Image src={skill.image} width={66} height={66} alt="skill" />
              <span>{skill.name}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeMySkills;
