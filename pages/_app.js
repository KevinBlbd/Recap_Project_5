import GlobalStyle from "../styles";
import React from "react";
import { SWRConfig } from "swr";
const URL = "https://example-apis.vercel.app/api/art";
import useSWR from "swr";
import Layout from "../components/layout";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Please reload</h1>;
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} data={data} />
        </SWRConfig>
      </Layout>
    </>
  );
}
