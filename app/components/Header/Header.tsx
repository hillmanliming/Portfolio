"use client;";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-screen px-8 pt-6 sm:px-10 md:px-16 lg:px-28">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/Logo.svg" alt="Logo" width={21} height={30} priority />
        </Link>

        <ul className="flex gap-6 font-medium">
          <li>
            <Link
              href="/about"
              className="transition-color duration-200 hover:text-gray-500"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
