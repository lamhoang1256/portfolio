import { Heading } from "components/text";
import Image from "next/image";

const HomeMySkills = () => {
  return (
    <div className=" layout-container">
      <div className="mt-20 text-center">
        <Heading>My skills & Knowledge</Heading>
        <p className="mt-3">Technologies and languages that I use to make my product everyday</p>
      </div>
      <div className="grid grid-cols-4 mx-auto mt-6 lg:grid-cols-6 gap-x-4 gap-y-3 w-max">
        {Array(12)
          .fill(0)
          .map((item, index) => (
            <div className="flex flex-col text-center" key={index}>
              <Image
                src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/html.svg"
                width={66}
                height={66}
                alt="skill"
              />
              <span>HTML</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeMySkills;
