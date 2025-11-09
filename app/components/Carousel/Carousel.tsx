import Image from "next/image";
export default function Carousel() {
  return (
    <section className="carousel-container">
      <div className="group">
        <div className="card">
          <Image
            className="carousel-item"
            src="/apple.avif"
            alt="Logo"
            width={200}
            height={200}
            priority
          ></Image>
        </div>
        <div className="card">
          <Image
            className="carousel-item"
            src="/brave.avif"
            alt="Logo"
            width={200}
            height={200}
            priority
          ></Image>
        </div>
        <div className="card">
          <Image
            className="carousel-item"
            src="/bun.avif"
            alt="Logo"
            width={200}
            height={200}
            priority
          ></Image>
        </div>
        <div className="card">
          <Image
            className="carousel-item"
            src="/chatgpt.avif"
            alt="Logo"
            width={200}
            height={200}
            priority
          ></Image>
        </div>
        <div className="card">
          <Image
            className="carousel-item"
            src="/figma.avif"
            alt="Logo"
            width={200}
            height={200}
            priority
          ></Image>
        </div>
        <div className="card">
          <Image
            className="carousel-item"
            src="/nextjs.avif"
            alt="Logo"
            width={200}
            height={200}
            priority
          ></Image>
        </div>
        <div className="card">
          <Image
            className="carousel-item"
            src="/tailwind.avif"
            alt="Logo"
            width={200}
            height={200}
            priority
          ></Image>
        </div>
        <div className="card">
          <Image
            className="carousel-item"
            src="/trello.avif"
            alt="Logo"
            width={200}
            height={200}
            priority
          ></Image>
        </div>
      </div>
    </section>
  );
}
