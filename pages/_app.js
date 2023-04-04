import GlobalStyle from "../styles";
import SWR from "swr";
import React from "react";
import { SWRConfig } from "swr";

import ArtPieces from "../components/artPieces";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <ArtPieces />
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
