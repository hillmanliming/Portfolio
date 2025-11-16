import Image from "next/image";

export default function Hornemannhuis() {
  return (
    <section className="flex flex-col gap-12 px-28 py-20 max-lg:grid-cols-1 max-lg:px-10 max-md:px-3">
      <p className="col-span-2 text-2xl text-gray-400">Het Hornemannhuis</p>
      <h1 className="text-6xl">Interactive video experience for museum</h1>

      <section className="grid grid-cols-2 gap-20 max-lg:grid-cols-1">
        <div className="flex max-w-[55ch] flex-col gap-6 text-justify text-xl">
          <p className="">
            The Hornemannhuis, a museum in the Netherlands, focusses on two
            siblings who passed away in World War II. In order to educate the
            younger generation about their story, I was part of a three man
            group who created a web-based interactive video experience. By
            giving the visitors different kind of dilemma&apos;s like the ones
            people in WW II had to make, they could get a better understanding
            of the challenges and hardships faced during that time.
          </p>
          <p className="">
            The users can join the experience by entering a unique code on their
            devices, which connects them to the main video display. After the
            video has played, the users are prompted to answer dilemma&apos;s
            related to the content Their responses are collected and in
            real-time and according to the majority vote, the video continues
            along a specific path. This creates an immersive and participatory
            experience.
          </p>
          <p>
            This project allowed me to enhance my skills in web development and
            user interaction design, while also providing a fun and educational
            experience for the users.
          </p>
          <p className="">
            Stack: Vanilla JavaScript, HTML, CSS, Node.js, Socket.io
          </p>
        </div>
        <div className="">
          <Image
            className="image"
            src="/hornemannhuis-green.avif"
            alt="Hornemannhuis"
            height={2676}
            width={2676}
          ></Image>
        </div>
      </section>
    </section>
  );
}
