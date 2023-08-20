// config
import { APP_BASE_API_URL, APP_NAME } from "@/config";

// components
import Content from "./Content";

export const metadata = {
   title: `${APP_NAME} | Home`,
   description: "Downloader Wep Application",
};

export default function Home() {
   return (
      <>
         <Content />
      </>
   );
}
