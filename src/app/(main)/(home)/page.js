import { APP_NAME } from "@/config";
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
