import Image from "next/image";

export default function Defensie() {
  return (
    <section className="grid h-screen grid-cols-2 gap-3 px-28 py-14 max-lg:grid-cols-1 max-lg:px-10 max-md:px-3">
      <div className="flex max-w-[55ch] flex-col gap-6 text-xl">
        <p className="text-2xl text-gray-400">Ministerie van Defensie</p>
        <h1 className="text-5xl">Stepper Component</h1>
        <p className="">
          For the Ministry of Defence project, I developed a stepper component,
          using StencilJS. This component was designed to guide users through a
          multi-step process, enhancing user experience and ensuring clarity at
          each stage.
        </p>
        <p>
          The stepper component is fully customizable, allowing for easy
          integration into various projects. It supports different styles and
          configurations to match the design requirements of the application.
        </p>
        <p>
          By utilizing StencilJS, I ensured that the component is lightweight
          and performs efficiently across different platforms. This project
          allowed me to deepen my understanding of web components and their
          applications in modern web development.
        </p>
      </div>
    </section>
  );
}
