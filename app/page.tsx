import Link from "next/link";
import Projects from "./components/Projects/Projects";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <div>
      <main className="mx-6 flex h-[85vh] flex-col items-center justify-center gap-30">
        <h1 className="text-center text-7xl">
          For those who want to keep things simple.
        </h1>
        <div className="flex gap-6">
          <Link
            href="mailto:contact@liminghillman.com"
            className="transition-ease-in-out rounded-4xl border-2 border-black px-6 py-3 font-medium text-black transition-colors duration-250 hover:border-2 hover:bg-black hover:text-white"
          >
          Email me
          </Link>
        </div>
      </main>
      <Projects />
      {/* Carousel progress 
      {/* <Carousel /> */}
    </div>
  );
}
