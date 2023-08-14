import "./globals.css";
import { Poppins } from "next/font/google";

// providers
import Providers from "./providers";

// config
import { APP_NAME } from "@/config";

const poppins = Poppins({
   weight: "400",
   // weight: ["300", "400", "500", "700"],
   // subsets: ["latin"],
   // display: "swap",
   preload: false,
});

export const metadata = {
   title: `${APP_NAME} | Home`,
   description: "Downloader Wep Application",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={poppins.className}>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
