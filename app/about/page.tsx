import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col gap-12 px-28 py-20 max-lg:grid-cols-1 max-lg:px-10 max-md:px-3">
      <h3 className="col-span-2 text-2xl text-gray-400">About</h3>
      <h1 className="text-6xl">Li-Ming Hillman</h1>

      <section className="grid grid-cols-2 gap-20 max-lg:grid-cols-1">
        <div className="flex max-w-[55ch] flex-col gap-6 text-justify text-xl">
          <p className="">
            Hi there! I’m a front end development and media design student at
            Fontys university of applied sciences.I’m currently learning React
            to add to my toolbox, allowing me to further pursue, and align with,
            my three pillars:
          </p>
          <div>
            <p className="flex flex-col">
              <span className="text-3xl">Simplicity</span>
              In most cases I’m I agree with the “less is more” methodology. I
              aim to create products that are straightforward and easy to use
              and Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, non. Aliquid fugit amet unde explicabo voluptatum eius
              labore atque animi molestiae doloribus, dicta dolores, esse
              pariatur quos ratione consequuntur perspiciatis!
            </p>
          </div>
          <div>
            <p>
              <span className="text-3xl">Efficiency</span>
              <br></br> This doesn’t just entail my work methods, but also the
              products itself. I aim to achieve as much as possible while
              resources as low as possible.
            </p>
          </div>
          <div>
            <p>
              <span className="text-3xl">Functionality</span>
              <br></br>“Form follows function.” This saying encapsulates my
              design philosophy in three words.
            </p>
          </div>
        </div>
        <div className="">
          <Image
            className="image"
            src="/portret.avif"
            alt="Portrait"
            height={2676}
            width={2676}
          ></Image>
        </div>
      </section>
    </section>
  );
}
