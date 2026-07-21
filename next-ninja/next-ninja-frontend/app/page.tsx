import Link from "next/link";
import LikeButton from "./ui/LikeButton";


export default function Home() {
  return (
    <div>
      Hello next-ninja-frontend




      <Link href={"/blogs"}>Blog page</Link>

      <LikeButton />
    </div>
  );
}
