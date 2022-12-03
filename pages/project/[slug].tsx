import { ArticleContent } from "components/article";
import { Meta } from "components/meta";
import { Heading } from "components/text";
import { LayoutHome } from "layouts";
import { ProjectImageSlider } from "modules/project";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { IProject } from "types/project";
import { getMdxSource } from "utils/helper";
import sanityClient from "utils/sanityClient";
import { sanityImgCard } from "utils/sanityImage";

interface ProjectDetailsPageProps {
  project: IProject;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ProjectDetailsPage = ({ project, mdxSource }: ProjectDetailsPageProps) => {
  return (
    <LayoutHome>
      <Meta
        title={project.title}
        image={sanityImgCard(project.mainImage)}
        description={project.description}
      />
      <div className="layout-container">
        <section className="max-w-[900px] mt-4 mx-auto">
          <Heading>{project.title}</Heading>
          <ProjectImageSlider images={project.images} className="my-6"></ProjectImageSlider>
          <p className="text-lg">{project.description}</p>
          <ArticleContent mdxSource={mdxSource} />
        </section>
      </div>
    </LayoutHome>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const queryRef = `*[_type == "project" && defined(slug.current)][].slug.current`;
  const paths = await sanityClient.fetch(queryRef);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug;
  try {
    const queryRef = `*[_type == "project" && slug.current == $slug][0]`;
    const project = await sanityClient.fetch(queryRef, { slug });
    const mdxSource = await getMdxSource(project.content);
    return { props: { project, mdxSource } };
  } catch (error) {
    return { props: {}, revalidate: 86400, notFound: true };
  }
};

export default ProjectDetailsPage;
