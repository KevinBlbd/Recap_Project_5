import useSWR from "swr";
import { React } from "react";
import ArtPieces from "../components/artPieces/index.js";
import SpotLight from "../components/spotlight/index.js";
import NavigationBar from "../components/navigation/index.js";
const URL = "https://example-apis.vercel.app/api/art";
// import App from "./_app.js";

export default function SpotlightPage({ data }) {
  // const { data, error, isLoading } = useSWR(URL);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (error) {
  //   return <h1>Please reload</h1>;
  // }
  console.log(data);
  function getRandomImageArtist() {
    return Math.floor(Math.random() * data.length);
  }
  function Image() {
    let numberOfPictureArtist = getRandomImageArtist();
    return (
      <SpotLight
        artist={data[numberOfPictureArtist].artist}
        image={data[numberOfPictureArtist].imageSource}
      />
    );
  }

  return <div>{Image()}</div>;
}
