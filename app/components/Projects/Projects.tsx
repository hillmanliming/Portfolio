"use-client";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="projects-container grid grid-cols-2 gap-3 px-28 max-lg:px-10 max-md:grid-cols-1 max-md:px-3">
      <article>
        <Link href={"/projects/defensie"}>
          <Image
            className="project-img-hover"
            src="/defensie-mb.avif"
            alt="Defensie"
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
            alt="Hornemannhuis"
            width={2000}
            height={1500}
            priority
          />
        </Link>
      </article>
    </div>
  );
}
