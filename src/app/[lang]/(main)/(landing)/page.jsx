import { Trans } from "react-i18next/TransWithoutContext";
import { useTranslation } from "@/app/i18n";

// config
import { APP_NAME } from "@/config";

// components
import Content from "./content";

// export async function generateMetadata({ params: { lng } }) {
//    const { t } = await useTranslation(lng);
//    return { title: t("h1") };
// }

export const metadata = {
   title: `${APP_NAME} | Home`,
   description:
      "Download your favorite Instagram photos and videos effortlessly with our Instagram Downloader Web Application. Fast, secure, and user-friendly. Try it now!",
};

export default async function HomePage({ params: { lang } }) {
   const { t } = await useTranslation(lang);

   console.log(t("app.name"));

   return (
      <>
         <Trans t={t} i18nKey="app.name">
            Welcome to Next.js v13 <small>appDir</small> and i18next
         </Trans>
         <Content />
      </>
   );
}
