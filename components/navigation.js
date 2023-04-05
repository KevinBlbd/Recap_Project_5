import Link from "next/link";
export default function NavigationBar() {
  return (
    <ul>
      <li>
        <Link href="../pages/spotlight/index.js">see spotlights</Link>
      </li>
      <li>
        <Link href="../pages/artPieces/index.js">see all works</Link>
      </li>
    </ul>
  );
}
