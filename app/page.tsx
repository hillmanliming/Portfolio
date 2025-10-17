import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full p-8">
        <nav>
          <ul className="flex items-center justify-between">
            <li>
              <a href="">
                <Image
                  src="/Logo.svg"
                  alt="Logo"
                  width={21}
                  height={30}
                  priority
                />
              </a>
            </li>
            <div className="flex gap-9">
              <li className="right flex">
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <main className="height-screen m-8 flex flex-col items-center">
        <h1 className="text-[200px] max-2xl:text-[180px] max-xl:text-[140px]">
          SIMPLICITY
        </h1>
        <p className="max-w-sm text-center text-base italic">
          "...the three pillars of my development philosophy. Qualities that I
          believe perfectly capture the expectations of modern web development.”
          -
        </p>
        <p>Li-Ming Hillman</p>
      </main>
    </>
  );
}
