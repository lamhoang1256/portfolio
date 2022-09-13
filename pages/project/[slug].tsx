import { Heading } from "components/text";
import { YouTube } from "components/youtube";
import { LayoutHome } from "layouts";
import { ProjectContent, ProjectImageSlider } from "modules/project";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { IProjectDetails } from "types/project";
import sanityClient from "utils/sanityClient";

interface ProjectDetailsPageProps {
  project: IProjectDetails;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ProjectDetailsPage = ({ project, mdxSource }: ProjectDetailsPageProps) => {
  return (
    <LayoutHome>
      <div className="layout-container">
        <section className="max-w-[900px] mt-4 mx-auto">
          <Heading>{project.title}</Heading>
          <YouTube url={project.videoDemo} className="my-6" />
          <ProjectImageSlider images={project.images} className="my-6" />
          <ProjectContent mdxSource={mdxSource} />
        </section>
      </div>
    </LayoutHome>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { slug = "" } = context.params;
  const project = await sanityClient.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]
  `,
    { slug }
  );
  const mdxSource = await serialize(project.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
      ],
    },
  });
  return {
    props: {
      project,
      mdxSource,
    },
  };
}

export default ProjectDetailsPage;
