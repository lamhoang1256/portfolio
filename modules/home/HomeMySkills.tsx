import { Heading } from "components/text";
import Image from "next/image";
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
      <div className="grid grid-cols-4 mx-auto mt-6 lg:grid-cols-6 gap-x-4 gap-y-3 w-max">
        {skills.map((skill, index) => (
          <div className="flex flex-col text-center" key={skill._id}>
            <Image src={skill.image} width={66} height={66} alt="skill" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMySkills;
