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
        {children}
        <Navbar/>
        </body>
    </html>
  );
}