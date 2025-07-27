import "./globals.css";
import { Poppins } from "next/font/google";
import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";

// utils
import getLocaleDirection from "@/utils/locale";

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

// export async function generateStaticParams() {
//    return languages.map((lng) => ({ lng }));
// }

export const metadata = {
   title: {
      default: APP_NAME,
      template: `%s | ${APP_NAME}`,
   },
   description: "Downloader Wep Application",
   // manifest: "/manifest.json",
   // themeColor: "#fdfdfd",
   // icons: {
   //   apple: "/icons/icon-192x192.png",
   // },
};

export default function RootLayout({ children, params: { lang } }) {
   return (
      <html lang={lang} dir={dir(lang)}>
         <body className={poppins.className} suppressHydrationWarning={true}>
            <Providers lang={lang}>{children}</Providers>
         </body>
      </html>
   );
}
