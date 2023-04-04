import Image from "next/image";
import ArtPiecePreview from "./artPiecePreview";
import { useState } from "react";

export default function ArtPieces({ pieces }) {

  return (
    <>
      {pieces.map((picture) => {
        return (
          <ul key={picture.slug}>
            <ArtPiecePreview
              image={picture.imageSource}
              title={picture.name}
              artist={picture.artist}
            />
          </ul>
        );
      })}
    </>
  );
}
