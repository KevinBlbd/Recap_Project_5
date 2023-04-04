import { useState } from "react";
import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <Image src={image} height="200" width="200" alt="image" />
      <h2>{artist}</h2>
    </>
  );
}
