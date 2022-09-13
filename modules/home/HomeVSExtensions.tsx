import { IconDownload, IconStar } from "components/icons";
import { Heading } from "components/text";
import Image from "next/image";

const HomeVSExtensions = () => {
  return (
    <div className="layout-container">
      <div className="mt-20 text-center">
        <Heading>My vscode extensions</Heading>
        <p className="mt-3">I am sure you will like my vscode extensions</p>
      </div>
      <div className="grid gap-6 mt-10 lg:grid-cols-2">
        <div className="flex items-center gap-4 p-4 rounded-md bg-linearPurple2">
          <div className="flex-shrink-0">
            <Image
              src="/beautiful-dracula.png"
              width={100}
              height={100}
              alt=""
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green82">Beautiful Dracula</h3>
            <p className="my-1 line-clamp-2">
              Yet another base on Dracula Official Theme fork, but better (in my opinion)
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <IconStar className="text-yellow-400" /> 5
              </div>
              <span>1.2K Download</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-md bg-slate-800">
          <div className="flex-shrink-0">
            <Image
              src="/faster-snippet.png"
              width={100}
              height={100}
              alt=""
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green82">Faster Snippets</h3>
            <p className="mt-1">Comming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVSExtensions;