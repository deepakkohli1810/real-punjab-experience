import type { Metadata } from "next";

import { Rubik, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navigation";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Real Punjab Experience",
  description: "Book your tour package with Real Punjab Experience",
  icons: {
    icon: "/favicon-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${playfair.variable}`}
    >
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
