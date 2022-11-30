import { Image } from "components/image";
import { LinkTargetBlank } from "components/link";
import { Heading } from "components/text";
import { ISkill } from "types";
import { sanityImgUrl } from "utils/sanityImgUrl";

interface HomeMySkillsProps {
  skills: ISkill[];
}

const HomeMySkills = ({ skills }: HomeMySkillsProps) => {
  return (
    <section className="py-10">
      <div className="layout-container">
        <div className="text-center">
          <Heading>My skills & Knowledge</Heading>
          <p>Technologies and languages that I use to make my product everyday</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-auto mt-8 sm:w-max sm:grid-cols-6">
          {skills
            .sort((a, b) => Number(new Date(a._createdAt)) - Number(new Date(b._createdAt)))
            .map((skill) => (
              <LinkTargetBlank
                key={skill._id}
                href={skill.url}
                className="flex flex-col text-center transition-all duration-200 hover:scale-105"
              >
                <Image
                  alt={skill.name}
                  src={sanityImgUrl(skill.image).url()}
                  width={66}
                  height={66}
                />
                <span>{skill.name}</span>
              </LinkTargetBlank>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMySkills;
