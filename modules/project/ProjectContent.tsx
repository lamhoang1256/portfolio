import { YouTube } from "components/youtube";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import "highlight.js/styles/base16/dracula.css";

interface ProjectContentProps {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ProjectContent = ({ mdxSource }: ProjectContentProps) => {
  return (
    <article className="pb-4 prose-base lg:prose-lg project-content prose-headings:font-medium prose-headings:!mt-5 prose-headings:!mb-5 prose-pre:py-2 prose-pre:px-0">
      <MDXRemote {...mdxSource} components={{ YouTube, Image }} />
    </article>
  );
};

export default ProjectContent;
