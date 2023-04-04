import useSWR from "swr";
import { React } from "react";
import ArtPieces from "../components/artPieces";
const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Please reload</h1>;
  }
  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
