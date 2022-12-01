import "../styles/global.scss";
import "../styles/text.scss";
import type { AppProps } from "next/app";
import { Meta } from "components/meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
