import Image from "next/image";
import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Your experiences</span>
      </h1>
      <p className="desc text-center">create and share creative experiences with the world!</p>
      <Feed />
    </section> 
  )
}
