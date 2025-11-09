import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer flex justify-between px-28 pt-28 pb-12 max-lg:px-10 max-md:px-3 max-sm:flex-col max-sm:items-center max-sm:gap-3 max-sm:p-10 max-sm:text-xs">
      <article>
        <Link href="mailto:contact@liminghillman.com">
          <p>contact@liminghillman.com</p>
        </Link>
      </article>
      <article>
        <p>© Li-Ming Hillman 2025</p>
      </article>
    </footer>
  );
}
