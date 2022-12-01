import { ArticleContent } from "components/article";
import { Meta } from "components/meta";
import { Heading } from "components/text";
import { LayoutHome } from "layouts";
import { ProjectImageSlider } from "modules/project";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { IProject } from "types/project";
import sanityClient from "utils/sanityClient";
import { sanityImgUrlMain } from "utils/sanityImgUrl";

interface ProjectDetailsPageProps {
  project: IProject;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ProjectDetailsPage = ({ project, mdxSource }: ProjectDetailsPageProps) => {
  return (
    <>
      <Meta
        title={project.title}
        image={sanityImgUrlMain(project.mainImage)}
        description={project.description}
      />
      <LayoutHome>
        <div className="layout-container">
          <section className="max-w-[900px] mt-4 mx-auto">
            <Heading>{project.title}</Heading>
            <ProjectImageSlider images={project.images} className="my-6"></ProjectImageSlider>
            <p className="text-lg">{project.description}</p>
            <ArticleContent mdxSource={mdxSource} />
          </section>
        </div>
      </LayoutHome>
    </>
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
            properties: { className: ["anchor"] }
          },
          { behaviour: "wrap" }
        ],
        rehypeHighlight
      ]
    }
  });
  return {
    props: {
      project,
      mdxSource
    }
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false
  };
}

export default ProjectDetailsPage;
