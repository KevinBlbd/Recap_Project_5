import useSWR from "swr";
import { React } from "react";
import ArtPieces from "../components/artPieces/artPieces";
import SpotLight from "../components/spotlight/spotlight";
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
  function Images() {
    let numberOfPictureArtist = getRandomImageArtist();
    return (
      <SpotLight
        artist={data[numberOfPictureArtist].artist}
        image={data[numberOfPictureArtist].imageSource}
      />
    );
  }

  return (
    <div>
      {Images()}
      <ArtPieces pieces={data} />
    </div>
  );
}
