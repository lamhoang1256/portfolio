import { Heading } from "components/text";
import { extensions } from "constants/data";
import Image from "next/image";

const HomeVSExtensions = () => {
  return (
    <div className="layout-container">
      <div className="mt-20 text-center">
        <Heading>My vscode extensions</Heading>
        <p>Useful vscode extension developed by me</p>
      </div>
      <div className="grid gap-6 mt-10 lg:grid-cols-2">
        {extensions.map((extension) => (
          <div
            className="flex items-center gap-4 p-4 rounded-md bg-linearCard"
            key={extension.name}
          >
            <div className="flex-shrink-0">
              <Image
                width={100}
                height={100}
                src={extension.image}
                alt={extension.name}
                className="rounded-md"
              ></Image>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green82">{extension.name}</h3>
              <p className="my-1 line-clamp-2">{extension.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeVSExtensions;
