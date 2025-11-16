import Image from "next/image";
export default function Defensie() {
  return (
    <section className="flex flex-col gap-12 px-28 py-20 max-lg:grid-cols-1 max-lg:px-10 max-md:px-3">
      <h3 className="col-span-2 text-2xl text-gray-400">
        The Ministry of Defence
      </h3>
      <h1 className="text-6xl">Stepper research and development</h1>

      <section className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        <div className="flex max-w-[55ch] flex-col gap-6 text-justify text-xl">
          <p className="">
            For the Ministry of Defence project, I did extensive research on
            stepper components, to figure out why, when and how one should be
            used. Based on my research findings, I developed one using
            StencilJS.
          </p>
          <p>
            By utilizing StencilJS, I ensured that the component is lightweight
            and performs efficiently across different frameworks. This project
            allowed me to deepen my understanding of web components and their
            applications in modern web development.
          </p>
          <p>Stack: StencilJS, CSS</p>
        </div>

        <div className="">
          <Image
            className="image"
            src="/defensie-mb.avif"
            alt="Portret"
            height={2676}
            width={2676}
          ></Image>
        </div>
      </section>
    </section>
  );
}
