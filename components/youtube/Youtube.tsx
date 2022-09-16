import { IframeHTMLAttributes } from "react";
import classNames from "utils/className";

interface YoutubeProps extends IframeHTMLAttributes<HTMLIFrameElement> {}

const YouTube = ({ className = "", ...props }: YoutubeProps) => {
  return (
    <iframe
      allow="autoplay; encrypted-media"
      title="Embedded YouTube video"
      className={classNames("w-full aspect-video", className)}
      {...props}
    />
  );
};
export default YouTube;
