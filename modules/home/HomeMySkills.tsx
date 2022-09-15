import { Heading } from "components/text";
import Image from "next/image";
import Link from "next/link";
import { ISkill } from "types";
import { sanityImgUrl } from "utils/sanityImgUrl";

interface HomeMySkillsProps {
  skills: ISkill[];
}

const HomeMySkills = ({ skills }: HomeMySkillsProps) => {
  return (
    <div className="layout-container">
      <div className="mt-20 text-center">
        <Heading className="mb-3">My skills & Knowledge</Heading>
        <p>Technologies and languages that I use to make my product everyday</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-auto mt-8 sm:w-max sm:grid-cols-6">
        {skills
          .sort((a, b) => Number(new Date(a._createdAt)) - Number(new Date(b._createdAt)))
          .map((skill) => (
            <Link href={skill.url} key={skill._id}>
              <a className="flex flex-col text-center transition-all duration-200 hover:scale-105">
                <Image
                  alt={skill.name}
                  src={sanityImgUrl(skill.image).url()}
                  width={66}
                  height={66}
                />
                <span>{skill.name}</span>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomeMySkills;
