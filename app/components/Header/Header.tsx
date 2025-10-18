import Image from "next/image";
import styles from "./header.module.css";
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-8">
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
          <li className="flex gap-9 bg-transparent px-6 py-3">
            <a className="text-white mix-blend-difference" href="">
              About
            </a>
            <a className="text-white mix-blend-difference" href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
