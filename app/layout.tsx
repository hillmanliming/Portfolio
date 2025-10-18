import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Li-Ming Hillman Portfolio",
  description: "Portfolio website of Li-Ming Hillman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* <p className="fixed top-5 text-white mix-blend-difference">hello</p> */}

        {children}
      </body>
    </html>
  );
}
