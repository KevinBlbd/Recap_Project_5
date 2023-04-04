import { useState } from "react";
import Image from "next/image";
import ArtPieces from "./artPieces";
import ArtPiecePreview from "./artPiecePreview";
export default function Spotlight({ image, artist }) {
  return (
    <>
      {pieces.Math.random((picture) => {
        return (
          <ul key={picture.slug}>
            <ArtPiecePreview
              image={picture.imageSource}
              artist={picture.artist}
            />
          </ul>
        );
      })}
    </>
  );
}
