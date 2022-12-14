import { Card } from "components/card";
import { Meta } from "components/meta";
import { Heading } from "components/text";
import { REVALIDATE_TIME, REVALIDATE_TIME_ERROR } from "constants/global";
import { PATH } from "constants/path";
import { LayoutHome } from "layouts";
import { GetStaticProps } from "next";
import { IPost } from "types/post";
import sanityClient from "utils/sanityClient";
import { sanityImgUrl } from "utils/sanityImage";

interface PostsPageProps {
  posts: IPost[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <LayoutHome>
      <Meta title="Posts" />
      <section className="mt-20 layout-container">
        <div className="text-center">
          <Heading>Posts</Heading>
        </div>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post._id}
              title={post.title}
              slug={post.slug.current}
              path={`${PATH.post}/${post.slug.current}`}
              image={sanityImgUrl(post.mainImage).width(500).url()}
              description={post.description}
            />
          ))}
        </div>
      </section>
    </LayoutHome>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await sanityClient.fetch(`*[_type == "post"]`);
    return { props: { posts }, revalidate: REVALIDATE_TIME };
  } catch (error) {
    return { props: { posts: [] }, revalidate: REVALIDATE_TIME_ERROR };
  }
};

export default PostsPage;
