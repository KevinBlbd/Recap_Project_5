import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPieces(pieces) {
  const { data, error, isLoading } = useSWR(URL);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Please reload</h1>;
  }
  return <p>{data.artist}</p>;
}

// export default function ArtPieces({ pieces }) {
//     console.log(pieces);
// return

// return (
//   <>
//     {pieces.map((picture) => {
//       return (
//         <li key={picture.slug}>
//           <Image
//             alt="image"
//             height={picture.dimensions.height * 0.1}
//             width={picture.dimensions.width * 0.1}
//             src={picture.imageSource}
//           />
//           <ul>
//             <li>Title: {picture.name}</li>
//             <li>Artist: {picture.artist}</li>
//           </ul>
//         </li>
//       );
//     })}
//   </>
// );
