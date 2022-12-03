import { Icon404 } from "components/icons";
import { WrapLink } from "components/link";
import { Meta } from "components/meta";
import { PATH } from "constants/path";

const PageNotFound = () => {
  return (
    <div className="layout-container">
      <Meta title="Page Not Found" />
      <div className="flex flex-col items-center justify-center min-h-screen gap-y-2">
        <Icon404 />
        <h2 className="text-xl font-semibold">Oops! Something gone missing</h2>
        <span className="text-grayc4">We can&apos;t find the page you&apos;re looking for.</span>
        <WrapLink href={PATH.home}>
          <button className="px-4 py-2 mt-3 font-medium rounded-lg bg-linearPurple2">
            Back to Home
          </button>
        </WrapLink>
      </div>
    </div>
  );
};

export default PageNotFound;
