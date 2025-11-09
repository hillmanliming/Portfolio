"use-client";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="projects-container mx-28 grid grid-cols-2 gap-3 max-lg:mx-10 max-md:mx-3 max-md:grid-cols-1">
      <article>
        <Link href={"/projects/defensie"}>
          <Image
            className="project-img-hover"
            src="/defensie-mb.avif"
            alt="Logo"
            width={2000}
            height={1500}
            priority
          />
        </Link>
      </article>
      <article>
        <Link href={"/projects/hornemannhuis"}>
          <Image
            className="project-img-hover"
            src="/hornemannhuis-green.avif"
            alt="Logo"
            width={2000}
            height={1500}
            priority
          />
        </Link>
      </article>
    </div>
  );
}
