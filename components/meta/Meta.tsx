import Head from "next/head";
import { useRouter } from "next/router";

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
}

const server = "https://nguyenhoanglam.vercel.app";
const Meta = ({
  title = "Nguyen Hoang Lam - Front End Developer",
  description = "Nguyen Hoang Lam's Portfolio",
  image = `/seo-image.png`
}: MetaProps) => {
  const router = useRouter();
  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} key="title" />
      <meta name="robots" content="index,follow" />
      <meta name="description" content={description} key="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
      <meta name="copyright" content="lamhoang1256" key="copyright" />
      <meta
        name="keywords"
        content="lamhoang1256, nguyenhoanglam, lamhoang1256.dev"
        key="keywords"
      />
      <link rel="icon" href="/brand.png" key="favicon" />
      <link rel="canonical" href={server} key="canonical" />
      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={title} key="gg-name" />
      <meta itemProp="description" content={description} key="gg-description" />
      <meta itemProp="image" content={image} key="gg-image" />
      {/* Facebook Meta Tags  */}
      <meta property="og:type" content="website" key="og-type" />
      <meta property="og:title" content={title} key="og-title" />
      <meta property="og:description" content={description} key="og-description" />
      <meta property="og:image" content={image} key="og-image" />
      <meta property="og:image:alt" content={description} key="og-image-alt" />
      <meta property="og:locale" content="vi_VN" key="og-locale" />
      <meta property="og:url" content={`${server}${router.asPath}`} key="og-url" />
      {/* Twitter Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" key="twitter-card" />
      <meta property="twitter:url" content={`${server}${router.asPath}`} key="twitter-url" />
      <meta property="twitter:title" content={title} key="twitter-title" />
      <meta property="twitter:description" content={description} key="twitter-desc" />
      <meta property="twitter:image" content={image} key="twitter-image" />
    </Head>
  );
};

export default Meta;
