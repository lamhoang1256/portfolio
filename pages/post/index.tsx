import { Card } from "components/card";
import { Meta } from "components/meta";
import { Heading } from "components/text";
import { PATH } from "constants/path";
import { LayoutHome } from "layouts";
import { GetStaticProps } from "next";
import { IPost } from "types/post";
import sanityClient from "utils/sanityClient";
import { sanityImgUrl } from "utils/sanityImage";

interface PostPageProps {
  posts: IPost[];
}

const PostPage = ({ posts }: PostPageProps) => {
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
    return { props: { posts }, revalidate: 86400 };
  } catch (error) {
    return { props: { posts: [] }, revalidate: 86400 };
  }
};

export default PostPage;
