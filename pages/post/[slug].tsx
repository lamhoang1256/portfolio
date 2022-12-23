import { ArticleContent } from "components/article";
import { Image } from "components/image";
import { Meta } from "components/meta";
import { Heading } from "components/text";
import { REVALIDATE_TIME, REVALIDATE_TIME_ERROR } from "constants/global";
import { LayoutHome } from "layouts";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { IPost } from "types/post";
import { getMdxSource } from "utils/helper";
import sanityClient from "utils/sanityClient";
import { sanityImgUrl, sanityImgCard } from "utils/sanityImage";

interface PostDetailsPageProps {
  post: IPost;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const PostDetailsPage = ({ post, mdxSource }: PostDetailsPageProps) => {
  return (
    <LayoutHome>
      <Meta
        title={post.title}
        image={sanityImgCard(post.mainImage)}
        description={post.description}
      />
      <div className="layout-container">
        <section className="max-w-[900px] mt-4 mx-auto">
          <Heading>{post.title}</Heading>
          <div className="w-full my-4 overflow-hidden border border-gray-600 rounded-lg aspect-video">
            <Image
              width={1200}
              height={675}
              className="object-top"
              alt={post.slug.current}
              src={sanityImgUrl(post.mainImage).width(1200).height(675).url()}
            />
          </div>
          <p className="text-lg">{post.description}</p>
          <ArticleContent mdxSource={mdxSource} />
        </section>
      </div>
    </LayoutHome>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking"
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug;
  try {
    const queryRef = `*[_type == "post" && slug.current == $slug][0]`;
    const post = await sanityClient.fetch(queryRef, { slug });
    const mdxSource = await getMdxSource(post.content);
    return { props: { post, mdxSource }, revalidate: REVALIDATE_TIME };
  } catch (error) {
    return { props: {}, revalidate: REVALIDATE_TIME_ERROR, notFound: true };
  }
};

export default PostDetailsPage;
