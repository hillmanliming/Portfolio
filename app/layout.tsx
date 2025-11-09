import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
    <html lang="en" className="bg-white">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
