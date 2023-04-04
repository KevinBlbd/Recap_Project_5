import { useState } from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image alt="image" height="100" width="100" src={image} />

      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
    </>
  );
}
