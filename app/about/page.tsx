import Image from "next/image";

export default function About() {
  return (
    <section className="grid grid-cols-2 gap-3 px-28 py-14 max-lg:grid-cols-1 max-lg:px-10 max-md:px-3">
      <div className="flex max-w-[55ch] flex-col gap-6 text-xl">
        <p className="text-2xl text-gray-400">About</p>
        <h1 className="text-5xl">Li-Ming Hillman</h1>
        <p className="">
          Hi there! I’m a front end development and media design student at
          Fontys university of applied sciences.I’m currently learning React to
          add to my toolbox, allowing me to further pursue, and align with, my
          three pillars:
        </p>
        <section className="flex flex-col gap-6">
          <div>
            <p>
              <strong>Simplicity</strong>
              <br></br> In most cases I’m a firm believer in the “less is more”
              way of thinking. Although not always set in stone, it encourages
              to always ask yourself ‘is this add-on necessary?’
            </p>
          </div>
          <div>
            <p>
              <strong>Efficiency</strong>
              <br></br> This doesn’t just entail my work methods, but also the
              products itself. I aim to achieve as much as possible while
              resources as low as possible.
            </p>
          </div>
          <div>
            <p>
              <strong>Functionality</strong>
              <br></br>“Form follows function.” This saying encapsulates my
              design philosophy in three words.
            </p>
          </div>
        </section>
      </div>
      <div className="">
        <Image
          className="image"
          src="/portret.avif"
          alt="Portret"
          height={2676}
          width={2676}
        ></Image>
      </div>
    </section>
  );
}
