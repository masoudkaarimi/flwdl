import "./globals.css";
import Providers from "./providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
   weight: "400",
   // weight: ["300", "400", "500", "700"],
   // subsets: ["latin"],
   // display: "swap",
   preload: false,
});

export const metadata = {
   title: "FLWDL | Home",
   description: "Downloader Wep Application",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={poppins.className}>
            <main>
               <Providers>{children}</Providers>
            </main>
         </body>
      </html>
   );
}
