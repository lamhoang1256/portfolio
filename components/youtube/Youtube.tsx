import classNames from "utils/className";

interface YoutubeProps {
  url: string;
  className?: string;
}

const YouTube = ({ url, className = "" }: YoutubeProps) => {
  return (
    <iframe
      src={url}
      allow="autoplay; encrypted-media"
      title="Embedded YouTube video"
      className={classNames("w-full aspect-video", className)}
    />
  );
};
export default YouTube;
