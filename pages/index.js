import useSWR from "swr";
import { React } from "react";
import ArtPieces from "./artPieces/index.js";
import SpotLight from "./spotlight/index.js";
import NavigationBar from "../components/navigation.js";
const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Please reload</h1>;
  }

  function getRandomImageArtist() {
    return Math.floor(Math.random() * data.length);
  }
  function spotlightPage() {
    let numberOfPictureArtist = getRandomImageArtist();
    return (
      <SpotLight
        artist={data[numberOfPictureArtist].artist}
        image={data[numberOfPictureArtist].imageSource}
      />
    );
    // function navigationFunction() {}
  }

  return (
    <div>
      {" "}
      <NavigationBar />
      {spotlightPage()}
      {/* <ArtPieces pieces={data} /> */}
    </div>
  );
}
