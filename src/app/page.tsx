import About from "@/components/About/About";
import Article from "@/components/Articles/Article";
import Hero from "@/components/Hero/Hero";
import Subscribe from "@/components/Subscribe/Subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <Article />
     <Subscribe />
    </>
  );
}
