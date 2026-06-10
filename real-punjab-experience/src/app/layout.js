import Navigation from "./components/Navigation";
import "./globals.css";
import {Bebas_Neue} from "next/font/google"

const bebas = Bebas_Neue ({
    subsets:["latin"],
      weight: "400",

})

export default function RootLayout({children}) {
    return (
        <html>
            <body className={bebas.className}>
               <Navigation/>
            {children}
            </body>
        </html>
    )
}