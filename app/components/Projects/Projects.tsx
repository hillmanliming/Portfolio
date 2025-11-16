import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="projects-container grid grid-cols-2 gap-3 px-28 max-lg:px-10 max-md:grid-cols-1 max-md:px-3">
      <article className="project-card">
        <Link href={"/projects/defensie"}>
          <div className="project-image-wrapper">
            <Image
              className="project-image"
              src="/defensie-mb.avif"
              alt="Defensie"
              width={2000}
              height={1500}
              priority
            />
            <div className="project-title text-4xl">
              Ministerie van Defensie
            </div>
          </div>
        </Link>
      </article>
      <article className="project-card">
        <Link href="/projects/hornemannhuis">
          <div className="project-image-wrapper">
            <Image
              className="project-image"
              src="/hornemannhuis-green.avif"
              alt="Hornemannhuis"
              width={2000}
              height={1500}
              priority
            />
            <div className="project-title text-4xl">Het Hornemannhuis</div>
          </div>
        </Link>
      </article>
    </div>
  );
}
