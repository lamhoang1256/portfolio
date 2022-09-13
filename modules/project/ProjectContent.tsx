import { YouTube } from "components/youtube";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import "highlight.js/styles/base16/dracula.css";

interface ProjectContentProps {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ProjectContent = ({ mdxSource }: ProjectContentProps) => {
  return (
    <article className="pb-4 prose-lg project-content layout-container prose-invert prose-headings:font-medium prose-a:text-blue-600 prose-headings:mt-4 prose-headings:mb-4 prose-pre:py-2 prose-pre:px-0">
      <MDXRemote {...mdxSource} components={{ YouTube, Image }} />
    </article>
  );
};

export default ProjectContent;
