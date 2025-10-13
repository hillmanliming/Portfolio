import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
