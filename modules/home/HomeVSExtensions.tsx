import { LinkTargetBlank } from "components/link";
import { Heading } from "components/text";
import { extensions } from "constants/data";
import { Image } from "components/image";

const HomeVSExtensions = () => {
  return (
    <section className="py-10">
      <div className="layout-container">
        <div className="text-center">
          <Heading>My vscode extensions</Heading>
          <p>Useful vscode extension developed by me</p>
        </div>
        <div className="grid gap-6 mt-10 lg:grid-cols-2">
          {extensions.map((extension) => (
            <div
              className="flex items-center gap-4 p-4 rounded-md bg-linearCard"
              key={extension.name}
            >
              <LinkTargetBlank href={extension.path} className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src={extension.image}
                  alt={extension.name}
                  className="rounded-md"
                ></Image>
              </LinkTargetBlank>
              <div>
                <LinkTargetBlank href={extension.path} className="text-lg font-bold text-green82">
                  {extension.name}
                </LinkTargetBlank>
                <p className="my-1 line-clamp-2">{extension.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeVSExtensions;
