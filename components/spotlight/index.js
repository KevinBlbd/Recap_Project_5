import { Spotlight } from "./spotlight.styled";
import Image from "next/image";

export default function spotLight({ image, artist }) {
  return (
    <>
      <Spotlight>
        <Image src={image} height="500" width="500" alt="image" />
        <h2>{artist}</h2>
      </Spotlight>
    </>
  );
}
