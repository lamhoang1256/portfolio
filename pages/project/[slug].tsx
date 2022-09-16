import { Desc, Heading } from "components/text";
import { LayoutHome } from "layouts";
import { ProjectContent, ProjectImageSlider } from "modules/project";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/router";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { IProject } from "types/project";
import sanityClient from "utils/sanityClient";

interface ProjectDetailsPageProps {
  project: IProject;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ProjectDetailsPage = ({ project, mdxSource }: ProjectDetailsPageProps) => {
  const router = useRouter();
  return (
    <LayoutHome>
      <div className="layout-container">
        <section className="max-w-[900px] mt-4 mx-auto">
          <Heading>{project.title}</Heading>
          <ProjectImageSlider images={project.images} className="my-6"></ProjectImageSlider>
          <p className="text-lg">{project.description}</p>
          <ProjectContent mdxSource={mdxSource} />
        </section>
      </div>
    </LayoutHome>
  );
};

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

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
}

export default ProjectDetailsPage;
