import Image from "next/image";
import { ArtPiecePreviewStyle } from "./artPiecePreview.styled";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <ArtPiecePreviewStyle>
        <p>Title: {title}</p>
        <Image alt="image" height="100" width="100" src={image} />
        <p>Artist: {artist}</p>
      </ArtPiecePreviewStyle>
    </>
  );
}
